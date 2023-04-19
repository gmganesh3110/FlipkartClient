import axios from "axios";

// const URL = "https://flipkartbackend-28wr.onrender.com/api";
const URL = "http://localhost:5000/api";

export const authenticateSingUp = async (data) => {
  try {
    return await axios.post(`${URL}/user/singup`, data);
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/user/login`, data);
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
