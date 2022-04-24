import { PostsListState } from "../reducers/state";

export class PostsApi {
  constructor(private http: any) {}

  fetchAllPosts(): Promise<PostsListState[]> {
    return this.http.GET(`posts`, {
      headers: {},
      params: {},
      responseType: ""
    });
  }
}
