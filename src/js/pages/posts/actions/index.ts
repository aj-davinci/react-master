import { _toRequestType, FULFILLED } from "@src/common/actions/ActionUtils";

export const FETCH_POSTS = _toRequestType("fetch-posts");
export const FETCH_POSTS_SUCCESS = FULFILLED(FETCH_POSTS);

export const fetchPosts = () => ({
  type: FETCH_POSTS
});
