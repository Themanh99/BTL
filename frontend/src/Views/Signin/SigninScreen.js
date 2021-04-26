import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    const userSignin = useSelector(state => state.userSignin);
    const dispatch = useDispatch();
    const { loading, userInfo, error } = userSignin;
    
    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            props.history.push('/thongke');
        }
        else if(userInfo){
          props.history.push(redirect);
        }
        return () => {
        }
    }, [props.history , redirect , userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }
    return (
        <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Đăng nhập</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Địa chỉ Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Đăng nhập
          </button>
        </div>
        <div>
          <label />
          <div>
            Bạn chưa có tài khoản?{' '}
            <Link to={`/register?redirect=${redirect}`}>
              Tạo tài khoản
            </Link>
          </div>
        </div>
      </form>
    </div>
    );
}

export default SigninScreen;