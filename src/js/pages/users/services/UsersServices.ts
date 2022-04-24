import { UsersApi } from "@src/pages/users/services/UsersApi";
import { DefaultHttpService } from "@src/common/services/HttpService";
import { UsersListState } from "@src/pages/users/reducers/state";

class UsersServices {
  readonly userApi = new UsersApi(new DefaultHttpService());

  public fetchAllUsers(): Promise<UsersListState[]> {
    return  this.userApi.fetchAllUsers();
  }
}

export default new UsersServices();
