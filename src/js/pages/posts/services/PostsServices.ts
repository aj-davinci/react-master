import { DefaultHttpService } from "@src/common/services/HttpService";
import { PostsApi } from "./PostsApi";
import { PostsListState } from "../reducers/state";

class PostsServices {
  readonly postsApi = new PostsApi(new DefaultHttpService());

  public fetchAllPosts(): Promise<PostsListState[]> {
    return  this.postsApi.fetchAllPosts();
  }
}

export default new PostsServices();
