import { IAction } from "@src/common/actions/IAction";
import { FETCH_POSTS_SUCCESS } from "@src/pages/posts/actions";
import { PostsListState } from "@src/pages/posts/reducers/state";

const initialState = [];

export const postsReducers = (state: PostsListState[] = initialState, action: IAction): any => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {
      return [...action.payload];
    }

    default:
      return state;
  }
};