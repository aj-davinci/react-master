// global app state
import { Fetch } from "@src/common/reducers/State";
import { UserDetailsState } from "@src/pages/home/reducers/state";
import { UsersListState } from "@src/pages/users/reducers/state";
import { PostsListState } from "@src/pages/posts/reducers/state";

export interface State {
  user: UserDetailsState;
  users: UsersListState[];
  posts: PostsListState[];
  fetch: Fetch;
}
