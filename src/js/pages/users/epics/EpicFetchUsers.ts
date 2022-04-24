import { Epic } from "redux-observable";
import * as EpicUtils from "@src/common/epics/EpicUtils";
import { FETCH_USERS, FETCH_USERS_SUCCESS } from "@src/pages/users/actions";
import UsersServices from "@src/pages/users/services/UsersServices";
import FetchErrorHandler from "@src/common/api/FetchErrorHandler";

const request: EpicUtils.Request<any, any, any> = {
  type: FETCH_USERS,
  getData: () => UsersServices.fetchAllUsers(),
  processData: (data) => {
    return [
      {
        type: FETCH_USERS_SUCCESS,
        payload: data
      }
    ];
  },
  processError: response => [...FetchErrorHandler(response, "Enable to fetch the users at the moment.")]
}

export const EpicFetchUsers: Epic<any, any> = EpicUtils.Create(request);
