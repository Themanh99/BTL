import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../../actions/orderAction';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { PayPalButton } from 'react-paypal-button-v2';
import Axios from 'axios';
import { ORDER_DELIVER_RESET, ORDER_PAY_RESET } from '../../constants/orderConstants';
import jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';


function SeeOrder(props) {
    const orderId = props.match.params.id;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const orderPay = useSelector((state) => state.orderPay);
    const {
        loading: loadingPay,
        error: errorPay,
        success: successPay,
    } = orderPay;
    const orderDeliver = useSelector((state) => state.orderDeliver);
    const {
        loading: loadingDeliver,
        error: errorDeliver,
        success: successDeliver,
    } = orderDeliver;
    const dispatch = useDispatch();
    const [sdkReady, setSdkReady] = useState(false);

    useEffect(() => {
        const addPayPalScript = async () => {
            const { data } = await Axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };
        if (
            !order ||
            successPay ||
            successDeliver ||
            (order && order._id !== orderId)
        ) {
            dispatch({ type: ORDER_PAY_RESET });
            dispatch({ type: ORDER_DELIVER_RESET });
            dispatch(detailsOrder(orderId));

        } else {
            if (!order.isPaid) {
                if (!window.paypal) {
                    addPayPalScript();
                } else {
                    setSdkReady(true);
                }
            }
        }
    }, [dispatch, order, orderId, sdkReady, successPay, successDeliver]);

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(order, paymentResult));
    };
    const deliverHandler = () => {
        dispatch(deliverOrder(order._id));
    };
    const generatePDF = () => {
        const input = document.getElementById('page');
    html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('images/png');
            const pdf = new jsPDF('p', 'pt','a3');
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
            pdf.save("order.pdf");
        });
    }
    return loading ? (<LoadingBox></LoadingBox>) :
        error ? (<MessageBox variant="danger">{error}</MessageBox>) :
            (
                <div id="page">
                    <h1>Order {order._id}</h1>
                    <div className="row top">
                        <div className="col-2">
                            <ul>
                                <li>
                                    <div className="card card-body">
                                        <h2>?????a ch??? giao h??ng</h2>
                                        <p>
                                            <strong>H??? t??n ng?????i ?????t:</strong> {order.ConfirmInfo.fullName} <br />
                                            <strong>?????a ch??? giao h??ng: </strong> {order.ConfirmInfo.address},
                                                                                {order.ConfirmInfo.phoneNumber}
                                                                                    ,{order.ConfirmInfo.country}
                                        </p>
                                        {order.isDelivered ? (<MessageBox variant="success">???? g???i l??c:{order.deliveredAt}</MessageBox>)
                                            : (
                                                <MessageBox variant="danger">Ch??a ???????c g???i</MessageBox>
                                            )
                                        }
                                        <p>{order.trangthaidon}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="card card-body">
                                        <h2>Thanh to??n</h2>
                                        <p>
                                            <strong>Ph????ng th???c:</strong> {order.paymentMethod}
                                        </p>
                                        {order.isPaid ? (<MessageBox variant="success">???? thanh to??n l??c: {order.paidAt}</MessageBox>)
                                            : (
                                                <MessageBox variant="danger">Ch??a thanh to??n</MessageBox>
                                            )
                                        }
                                    </div>
                                </li>
                                <li>
                                    <div className="card card-body">
                                        <h2>Danh s??ch h??ng ?????t</h2>
                                        <ul>
                                            {order.orderItems.map((item) => (
                                                <li key={item.product}>
                                                    <div className="row">
                                                        <div>
                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                                className="small"
                                                            ></img>
                                                        </div>
                                                        <div className="min-30">
                                                            <Link to={`/product/${item.product}`}>
                                                                {item.name}
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            {item.slmua} x ${item.price} = ${item.slmua * item.price}
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <h2>Order Summary</h2>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Items</div>
                                            <div>${order.itemsPrice.toFixed(2)}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Ph?? ship</div>
                                            <div>${order.shippingPrice.toFixed(2)}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Thu??? VAT</div>
                                            <div>${order.taxPrice.toFixed(2)}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>
                                                <strong> T???ng c???ng</strong>
                                            </div>
                                            <div>
                                                <strong>${order.totalPrice.toFixed(2)}</strong>
                                            </div>
                                        </div>
                                    </li>
                                    {!order.isPaid && (
                                        <li>
                                            {!sdkReady ? (
                                                <LoadingBox></LoadingBox>
                                            ) : (
                                                <>
                                                    {errorPay && (
                                                        <MessageBox variant="danger">{errorPay}</MessageBox>
                                                    )}
                                                    {loadingPay && <LoadingBox></LoadingBox>}

                                                    <PayPalButton
                                                        amount={order.totalPrice}
                                                        onSuccess={successPaymentHandler}
                                                    ></PayPalButton>
                                                </>
                                            )}
                                        </li>
                                    )}
                                    {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                                        <li>
                                            {loadingDeliver && <LoadingBox></LoadingBox>}
                                            {errorDeliver && (
                                                <MessageBox variant="danger">{errorDeliver}</MessageBox>
                                            )}
                                            <button
                                                type="button"
                                                className="primary block"
                                                onClick={deliverHandler}
                                            >
                                                Deliver Order
                                            </button>
                                        </li>
                                    )}
                                    {userInfo.isAdmin && (
                                        <button onClick={generatePDF} type="primary">Xu???t file PDF</button>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
}

export default SeeOrder;