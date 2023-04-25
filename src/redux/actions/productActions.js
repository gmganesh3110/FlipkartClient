import axios from "axios";
import * as actionType from "../constants/productConstants";
const URL = "https://flipkartbackend-28wr.onrender.com/api";
// const URL = "http://localhost:5000/api";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL}/product/allproducts`);

    dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message });
    console.log(error);
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.post(`${URL}/product/product`, { id });
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
