import axios from "axios";

const URL = "https://flipkartbackend-28wr.onrender.com/api";
// const URL = "http://localhost:5000/api";

export const authenticateSingUp = async (data) => {
  try {
    return await axios.post(`${URL}/singup`, data);
  } catch (error) {
    console.log(error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log(error);
  }
};
