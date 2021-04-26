import React from 'react';
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions/userActions';

function HeaderSeller(props) {
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const signoutHandler = () => {
        dispatch(signout());
    }
    const menu1 = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/profile">Thông tin cá nhân</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <Link to="/signin" onClick={signoutHandler}>
                    Đăng xuất
            </Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <Link to="/manageproduct/seller">
                        <i class="fas fa-shoe-prints"></i>
                        <a href="#facebook">Anh Cherry</a>
                    </Link>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['manageProductseller']}>
                    <Menu.Item key="manageProductseller">
                        <Link to="/manageproduct/seller">Quản lý Hàng</Link>
                    </Menu.Item>
                    <Menu.Item key="manageOrderseller">
                        <Link to="/manageorder/seller">Quản Lý Đặt Hàng</Link>
                    </Menu.Item>
                    <Menu.Item key="signins">
                        {
                            userInfo ? (
                                <Dropdown overlay={menu1}>
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

export default HeaderSeller;