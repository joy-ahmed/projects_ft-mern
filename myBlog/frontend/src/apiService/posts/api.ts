import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

export const createPostAPI = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts/`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//fetch all post
export const getAllPostsAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//fetch single post
export const getSinglePostAPI = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//update post
export const updatePostAPI = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/post/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//delete post
export const deletePostAPI = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
