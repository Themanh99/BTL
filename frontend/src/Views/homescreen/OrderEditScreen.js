import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { ORDER_UPDATE_RESET } from '../../constants/orderConstants';
import { detailsOrder, updateOrder } from '../../actions/orderAction';

export default function OrderEditScreen(props) {
  const orderId = props.match.params.id;
  const [isPaid, setIsPaid] = useState('');
  const [isDelivered, setisDelivered] = useState('');
  const [trangthaidon, setTrangthaidon] = useState('');

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const orderUpdate = useSelector((state) => state.orderUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = orderUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: ORDER_UPDATE_RESET });
      props.history.push('/manageorder');
    }
    if (!order) {
      dispatch(detailsOrder(orderId));
    } else {
      setIsPaid(order.isPaid);
      setisDelivered(order.isDelivered);
      setTrangthaidon(order.trangthaidon);
    }
  }, [dispatch, props.history, successUpdate, order, orderId]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateOrder({ _id: orderId, isPaid, isDelivered, trangthaidon }));
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Chỉnh sửa thông tin</h1>
          {loadingUpdate && <LoadingBox></LoadingBox>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="isSeller">Thanh toán</label>
              <input
                id="isPaid"
                type="checkbox"
                checked={isPaid}
                onChange={(e) => setIsPaid(e.target.checked)}
              ></input>
            </div>
            <div>
              <label htmlFor="isAdmin">Đã nhận hàng</label>
              <input
                id="isDelivered"
                type="checkbox"
                checked={isDelivered}
                onChange={(e) => setisDelivered(e.target.checked)}
              ></input>
            </div>
            <div className="radioTrangthaidon">
              <label htmlFor="trangthaidon">Trạng thái đơn hàng</label>
              <select value={trangthaidon} onChange={(e) => setTrangthaidon(e.target.value)}>
                <option value="Chờ xác nhận">Chờ xác nhận</option>
                <option value="Chấp nhận đơn">Chấp nhận đơn</option>
                <option value="Hàng đang được giao">Đang giao hàng</option>
              </select>
            </div>
            <div>
              <button type="submit" className="primary">
                Cập nhật
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}