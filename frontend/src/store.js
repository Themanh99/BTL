import { createStore , combineReducers, compose, applyMiddleware } from 'redux';
import { productCategoryListReducer, productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productReviewCreateReducer, productTopReducer, productUpdateReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { cartReducers } from './reducers/cartReducers';

import { userDeleteReducer, userDetailReducer, userListReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer, userUpdateReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailReducer, orderHistoryListReducer, orderListReducer, orderPayReducer } from './reducers/orderReducers';


const initialState = { 
    userSignin:{
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cart : {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        ConfirmInfo: localStorage.getItem('ConfirmInfo')
        ? JSON.parse(localStorage.getItem('ConfirmInfo'))
        : {},
        paymentMethod: 'Paypal',
    },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailReducer,
    orderHistoryList: orderHistoryListReducer,
    orderPay: orderPayReducer,
    userDetails: userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete:orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    userList:userListReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,
    productTop: productTopReducer,
    productCategoryList:productCategoryListReducer,
    productReviewCreate:productReviewCreateReducer,
})
// chú ý define ở đây là lúc mình dùng trong các component 
// ví dụ: const {gì gì đó } = orderDetails

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;