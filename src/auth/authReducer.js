import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions/action-types';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {};

    case AUTH_LOGOUT:
      return {};

    default:
      return state;
  }
};

export default authReducer;
