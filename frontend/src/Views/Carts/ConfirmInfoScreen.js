import React, { useState } from 'react';
import CheckInfo from '../Components/CheckInfo';
import { useDispatch, useSelector } from 'react-redux';
import { saveConfirmInfo } from '../../actions/cartAction';
// check info shipping 
function ConfirmInfoScreen(props) {
    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector((state) => state.cart);
    const ConfirmInfo = cart;
    if (!userInfo) {
        props.history.push('/signin');
    }
    const [fullName , setFullName] = useState(ConfirmInfo.fullName);
    const [address , setAddress] = useState(ConfirmInfo.address);
    const [phoneNumber , setPhoneNumber] = useState(ConfirmInfo.phoneNumber);
    const [country , setCountry] = useState(ConfirmInfo.country);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveConfirmInfo({fullName,address,phoneNumber,country}));
        props.history.push('/payment');
    };
    return (
        <div>
            <CheckInfo step1 step2>    
            </CheckInfo>
            <form className="form" onSubmit={submitHandler}>
                    <div>
                        <h1>
                            Nhập thông tin cá nhân
                        </h1>
                        <div>
                            <label htmlFor="fullName"><h3>Họ tên</h3></label>
                            <input 
                            type="text" 
                            id="fullName" 
                            placeholder="Enter full name" 
                            value={fullName} 
                            onChange={(e) => {setFullName(e.target.value)}} 
                            required
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="address"><h3>Địa chỉ</h3></label>
                            <input 
                            type="text" 
                            id="address" 
                            placeholder="Enter address" 
                            value={address} 
                            onChange={(e) => {setAddress(e.target.value)}} 
                            required
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="phoneNumber"><h3>Số điện thoại</h3></label>
                            <input 
                            type="text" 
                            id="phoneNumber" 
                            placeholder="Enter phoneNumber" 
                            value={phoneNumber} 
                            onChange={(e) => {setPhoneNumber(e.target.value)}} 
                            required
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="country"><h3>Quốc gia</h3></label>
                            <input 
                            type="text" 
                            id="country" 
                            placeholder="Enter country" 
                            value={country} 
                            onChange={(e) => {setCountry(e.target.value)}} 
                            required
                            ></input>
                        </div>
                        <div>
                            <label/>
                            <button className="primary" type="submit">
                                Tiếp tục
                            </button>
                        </div>
                    </div> 
                </form>
        </div>
    );
}

export default ConfirmInfoScreen;