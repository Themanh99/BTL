import React from 'react';

function CheckInfo(props) {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active' : ''}>Đăng nhập</div>
            <div className={props.step2 ? 'active' : ''}>Nhập thông tin</div>
            <div className={props.step3 ? 'active' : ''}>Phương thức thanh toán</div>
            <div className={props.step4 ? 'active' : ''}>Xác nhận</div>
        </div>
    );
}

export default CheckInfo;