import axios from "axios";
import { POST_TYPES } from "../types";
import config from "../config";

function fetchPosts() {
  const request = axios.get(`${config.JSONPLACEHOLDER_API_BASE_URL}/posts`);

  return {
    type: POST_TYPES.FETCH_POSTS,
    payload: request,
  };
}

function selectPost(id) {
  return {
    type: POST_TYPES.SELECT_POST,
    payload: id,
  };
}

function deselectPost(id) {
  return {
    type: POST_TYPES.DESELECT_POST,
    payload: id,
  };
}

export default {
  fetchPosts,
  selectPost,
  deselectPost,
};
