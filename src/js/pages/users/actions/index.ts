import { _toRequestType, FULFILLED } from "@src/common/actions/ActionUtils";

export const FETCH_USERS = _toRequestType("fetch-users");
export const FETCH_USERS_SUCCESS = FULFILLED(FETCH_USERS);

export const fetchUsers = () => ({
  type: FETCH_USERS
});
