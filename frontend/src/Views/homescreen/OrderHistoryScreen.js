import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { xemlichsuMua, deleteOrder } from '../../actions/orderAction';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';


function OrderHistoryScreen(props) {
  const orderHistoryList = useSelector((state) => state.orderHistoryList);
  const { loading, error, orders } = orderHistoryList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successDelete) {
      window.alert('Đã xóa thành công !');
      // dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(xemlichsuMua());
  }, [dispatch,successDelete]);
  const deleteHandler = (order) => {
    if (window.confirm('Bạn có chắc muốn hủy đơn hàng này không?')) {
      dispatch(deleteOrder(order._id));
    }
  }
  return (
    <div>
      <h1>Lịch sử mua hàng</h1>
      {loadingDelete && <LoadingBox>
      </LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
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
                  {
                    order.trangthaidon==="Chờ xác nhận" ? (
                      <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)}
                  >
                    Hủy đơn
                  </button>
                    ):(
                      <div></div>
                    )
                  }
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