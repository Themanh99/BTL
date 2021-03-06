import { CATE_PRO_FAIL, CATE_PRO_REQUEST, CATE_PRO_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_RESET, PRODUCT_CREATE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_RESET, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REVIEW_CREATE_FAIL, PRODUCT_REVIEW_CREATE_REQUEST, PRODUCT_REVIEW_CREATE_RESET, PRODUCT_REVIEW_CREATE_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_RESET, PRODUCT_UPDATE_SUCCESS, TOPSP_FAIL, TOPSP_REQUEST, TOPSP_SUCCESS } from "../constants/productConstants";

function productListReducer(state= {loading : true , products: [] }, action) {

    switch (action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true};
        case PRODUCT_LIST_SUCCESS:
          return {
            loading: false,
            products: action.payload.products,
            pages: action.payload.pages,
            page: action.payload.page,
          };
        case PRODUCT_LIST_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state;
    }
}

function productDetailsReducer(state= { loading: true }, action) {

    switch (action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state;
    }
}

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_CREATE_REQUEST:
        return { loading: true };
      case PRODUCT_CREATE_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case PRODUCT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
        return { loading: true };
      case PRODUCT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case PRODUCT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_DELETE_REQUEST:
        return { loading: true };
      case PRODUCT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case PRODUCT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const productTopReducer = (state = { loading: true, products: [] }, action) => {
    switch (action.type) {
      case TOPSP_REQUEST:
        return { loading: true };
      case TOPSP_SUCCESS:
        return { loading: false, products: action.payload };
      case TOPSP_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const productCategoryListReducer = (
    state = { loading: true, products: [] },
    action
  ) => {
    switch (action.type) {
      case CATE_PRO_REQUEST:
        return { loading: true };
      case CATE_PRO_SUCCESS:
        return { loading: false, categories: action.payload };
      case CATE_PRO_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case PRODUCT_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case PRODUCT_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

export { productListReducer, productDetailsReducer }