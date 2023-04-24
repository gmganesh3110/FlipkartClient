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
