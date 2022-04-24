import { IAction } from "@src/common/actions/IAction";
import { FETCH_USERS_SUCCESS } from "@src/pages/users/actions";
import { UsersListState } from "@src/pages/users/reducers/state";

const initialState = [];

export const usersReducers = (state: UsersListState[] = initialState, action: IAction): any => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS: {
      return [...action.payload];
    }

    default:
      return state;
  }
};