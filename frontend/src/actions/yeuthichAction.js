import Axios from 'axios';
import {
    YEUTHICH_CREATE_FAIL,
    YEUTHICH_CREATE_REQUEST, YEUTHICH_CREATE_SUCCESS, YEUTHICH_LIST_FAIL, YEUTHICH_LIST_REQUEST, YEUTHICH_LIST_SUCCESS
} from '../constants/yeuthichConstants';


export const listYeuthichs = () => async (dispatch) => {
    dispatch({
      type: YEUTHICH_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get('/api/yeuthichs');
      dispatch({ type: YEUTHICH_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: YEUTHICH_LIST_FAIL, payload: error.message });
    }
  };

  export const createYeuthich = (yeuthich) => async (dispatch, getState) => {
    dispatch({ type: YEUTHICH_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        '/api/yeuthichs',
        yeuthich,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: YEUTHICH_CREATE_SUCCESS,
        payload: data.yeuthich,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: YEUTHICH_CREATE_FAIL, payload: message });
    }
  };