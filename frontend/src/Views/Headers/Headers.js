import React, { useEffect, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions/userActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { listProductCategories } from '../../actions/productAction';

function Headers(props) {
    const cart = useSelector((state) => state.cart);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };

    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;
    useEffect(() => {
        dispatch(listProductCategories());
    }, [dispatch]);
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/profile">Thông tin cá nhân</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/orderhistory">Lịch sử mua </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <Link to="" onClick={signoutHandler}>
                    Đăng xuất
            </Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <button
                        type="button"
                        className="open-sidebar"
                        onClick={() => setSidebarIsOpen(true)}
                    >
                        <i className="fa fa-bars"></i>
                    </button>
                    <Link to="/">
                        <i class="fas fa-shoe-prints"></i>
                        <a href="#facebook">Anh Cherry</a>
                    </Link>
                    <aside className={sidebarIsOpen ? 'open' : ''}>
                    <ul className="categories">
                        <li>
                            <strong>Loại Sản Phẩm</strong>
                            <button
                                onClick={() => setSidebarIsOpen(false)}
                                className="close-sidebar"
                                type="button"
                            >
                                <i className="fa fa-close"></i>
                            </button>
                        </li>
                        {loadingCategories ? (
                            <LoadingBox></LoadingBox>
                        ) : errorCategories ? (
                            <MessageBox variant="danger">{errorCategories}</MessageBox>
                        ) : (
                            categories.map((c) => (
                                <li key={c}>
                                    <Link
                                        to={`/search/category/${c}`}
                                        onClick={() => setSidebarIsOpen(false)}
                                    >
                                        {c}
                                    </Link>
                                </li>
                            ))
                        )}
                    </ul>
                </aside>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">
                        <Link to="/">Trang chủ</Link>
                    </Menu.Item>
                    <Menu.Item key="product">
                        <Link to="/products/">Sản phẩm</Link>
                    </Menu.Item>
                    <Menu.Item key="cart">
                        <Link to="/cart/">Giỏ hàng
                        {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="signins">
                        {
                            userInfo ? (
                                <Dropdown overlay={menu}>
                                    <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>{' '}</Link>
                                </Dropdown>
                            ) : (
                                <Link to="/signin">Đăng nhập</Link>
                            )
                        }
                    </Menu.Item>
                    <Menu.Item key="signup">
                        {
                            userInfo ? (
                                <div></div>
                            ) : (
                                <Link to="/register">Đăng ký</Link>
                            )
                        }
                    </Menu.Item>
                </Menu>
                
            </div>
        </div>
    );
}

export default Headers;