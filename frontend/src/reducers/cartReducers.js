import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM, CART_SAVE_INFO_ADDRESS, CART_SAVE_PAYMENT_METHOD } from "../constants/cartConstants";

function cartReducers(state={cartItems:[]}, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);
            if(product){
                return { 
                    cartItems:
                     state.cartItems.map(x => x.product === product.product ? item : x)};
            }
                return { cartItems: [...state.cartItems, item]};
        case CART_REMOVE_ITEM:
            return { cartItems: state.cartItems.filter(x => x.product!==action.payload) };
        case CART_SAVE_INFO_ADDRESS:
            return {
            ...state, ConfirmInfo: action.payload
            };
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state, paymentMethod: action.payload
            };
        case CART_EMPTY:
            return {
                ...state, cartItems: []
            };
        default:
            return state;
        
    }
}

export  {cartReducers};