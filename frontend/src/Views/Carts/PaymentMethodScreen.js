import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../actions/cartAction';
import CheckInfo from '../Components/CheckInfo';
// select method payment two option : paypal va offline
function PaymentMethodScreen(props) {
    const cart = useSelector((state) => state.cart);
  const { ConfirmInfo } = cart;
  if (!ConfirmInfo.address) {
    props.history.push('/checkinfo');
  }
    const [paymentMethod, setPaymentMethod] = useState('Paypal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    };
    return (
        <div>
            <CheckInfo step1 step2 step3></CheckInfo>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Chọn phương thức thanh toán</h1>
                </div>
                <div>
                    <div className="payment">
                        <input
                         type="radio"
                         id="paypal"
                         value="Paypal"
                         name="paymentMethod"
                         required
                         checked
                         onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="paypal">Paypal</label>
                    </div>
                </div>
                <div>
                    <div className="payment">
                        <input
                         type="radio"
                         id="paypal"
                         value="Trasau"
                         name="paymentMethod"
                         required
                         onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="paypal">Thanh toán khi nhận hàng</label>
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    );
}

export default PaymentMethodScreen;