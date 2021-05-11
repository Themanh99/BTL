import { YEUTHICH_CREATE_FAIL, YEUTHICH_CREATE_REQUEST, YEUTHICH_CREATE_RESET, YEUTHICH_CREATE_SUCCESS, YEUTHICH_LIST_FAIL, YEUTHICH_LIST_REQUEST, YEUTHICH_LIST_SUCCESS } from "../constants/yeuthichConstants";


export const yeuthichListReducer = (
    state = { loading: true, yeuthichs: [] },
    action
  ) => {
    switch (action.type) {
      case YEUTHICH_LIST_REQUEST:
        return { loading: true };
      case YEUTHICH_LIST_SUCCESS:
        return { loading: false, YEUTHICHs: action.payload };
      case YEUTHICH_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const yeuthichCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case YEUTHICH_CREATE_REQUEST:
        return { loading: true };
      case YEUTHICH_CREATE_SUCCESS:
        return { loading: false, success: true, yeuthich: action.payload };
      case YEUTHICH_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case YEUTHICH_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };