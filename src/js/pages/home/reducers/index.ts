import {IAction} from "@src/common/actions/IAction";
import { UserDetailsState } from "@src/pages/home/reducers/state";
import { SET_USER_DETAILS } from "@src/pages/home/actions";

const initial: UserDetailsState = {
  name: "",
  email: ""
};

export const setUserDetailsReducer = (state: UserDetailsState = initial, action: IAction<any>): any => {
  switch (action.type) {
    case SET_USER_DETAILS: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
};