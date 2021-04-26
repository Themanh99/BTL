import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM , CART_SAVE_INFO_ADDRESS, CART_SAVE_PAYMENT_METHOD} from '../constants/cartConstants';

const addToCart = (productId,slmua) => async (dispatch, getState) => {
    try {
        const {data} = await Axios.get(`/api/products/${productId}`);
        const {
            cart: { cartItems },
          } = getState();
        dispatch({
            type: CART_ADD_ITEM , payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            soluongco:data.soluongco,
            seller: data.seller,
            slmua
        }});
        localStorage.setItem(
            'cartItems',
            JSON.stringify(getState().cart.cartItems)
          );
    } catch (error) {
        
    }
}
const removeFromCart = (productId) => async (dispatch,getState) => {
    dispatch({type: CART_REMOVE_ITEM,payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}
export const saveConfirmInfo = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_INFO_ADDRESS, payload: data });
    localStorage.setItem('ConfirmInfo', JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_PAYMENT_METHOD, payload: data });
};
export { addToCart,removeFromCart };