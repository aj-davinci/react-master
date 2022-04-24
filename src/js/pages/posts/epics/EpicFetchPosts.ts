import { Epic } from "redux-observable";
import * as EpicUtils from "@src/common/epics/EpicUtils";
import FetchErrorHandler from "@src/common/api/FetchErrorHandler";
import { FETCH_POSTS, FETCH_POSTS_SUCCESS } from "../actions";
import PostsServices from "@src/pages/posts/services/PostsServices";

const request: EpicUtils.Request<any, any, any> = {
  type: FETCH_POSTS,
  getData: () => PostsServices.fetchAllPosts(),
  processData: (data) => {
    return [
      {
        type: FETCH_POSTS_SUCCESS,
        payload: data
      }
    ];
  },
  processError: response => [...FetchErrorHandler(response, "Enable to fetch the users at the moment.")]
}

export const EpicFetchPosts: Epic<any, any> = EpicUtils.Create(request);
