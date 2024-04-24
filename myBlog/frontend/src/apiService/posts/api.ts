import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

export const createPostAPI = async (data) => {
  try {
    const response = axios.post(`${BASE_URL}/posts/`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
