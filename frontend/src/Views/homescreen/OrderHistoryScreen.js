import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { xemlichsuMua } from '../../actions/orderAction';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

function OrderHistoryScreen(props) {
  const orderHistoryList = useSelector((state) => state.orderHistoryList);
  const { loading, error, orders } = orderHistoryList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(xemlichsuMua());
  }, [dispatch]);
  return (
    <div>
      <h1>Lịch sử mua hàng</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Mã đơn</th>
              <th>Ngày mua</th>
              <th>Tổng</th>
              <th>Thanh toán</th>
              <th>Đã gửi</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'No'}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderHistoryScreen;