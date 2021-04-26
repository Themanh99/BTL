import { Button} from 'antd';
import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageBox from '../Components/MessageBox';

function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems , error } = cart;

    const productId = props.match.params.id;
    const slmua = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const removeItemInCart = (productId) => {
        dispatch(removeFromCart(productId));
    }
    const dathangClick = () => {
        props.history.push('/signin?redirect=checkinfo');
    }

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, slmua));
        }
    }, [dispatch , productId , slmua]);

    return (
        <div className="row top">
      <div className="col-2">
        <h1>Giỏ hàng</h1>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
            Giỏ hàng trống ! <Link to="/">Tiếp tục mua sắm</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
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
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.slmua}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.soluongco).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <Button type="dashed"
                      onClick={() => removeItemInCart(item.product)}
                    >
                      Xóa
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Tổng ({cartItems.reduce((a, c) => a + c.slmua, 0)} sản phẩm) : $
                {cartItems.reduce((a, c) => a + c.price * c.slmua, 0)}
              </h2>
            </li>
            <li>
              <Button type="primary" onClick={dathangClick} disabled={cartItems.length === 0}>
                    Đặt hàng
      </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
}

export default CartScreen;