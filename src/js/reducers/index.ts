import { combineReducers } from "redux";
import { fetchReducer } from "@src/common/reducers/fetchReducer";
import { setUserDetailsReducer } from "@src/pages/home/reducers";
import { usersReducers } from "@src/pages/users/reducers";
import { postsReducers } from "@src/pages/posts/reducers";

export const combinedReducers = combineReducers({
  user: setUserDetailsReducer,
  users: usersReducers,
  posts: postsReducers,
  fetch: fetchReducer,
});
