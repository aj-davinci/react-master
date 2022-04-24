import { UsersListState } from "@src/pages/users/reducers/state";

export class UsersApi {
  constructor(private http: any) {}

  fetchAllUsers(): Promise<UsersListState[]> {
    return this.http.GET(`users`, {
      headers: {},
      params: {},
      responseType: ""
    });
  }
}
