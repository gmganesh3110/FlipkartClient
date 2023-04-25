import axios from "axios";
import * as actionType from "../constants/cartConstant";
const URL = "https://flipkartbackend-28wr.onrender.com/api";
// const URL = "http://localhost:5000/api";
export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL}/product/product`, { id });
    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({
      type: actionType.ADD_TO_CART_ERROR,
      payload: error,
    });
  }
};
export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
};
