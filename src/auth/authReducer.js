import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions/action-types';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...action.payload,
        logged: true,
      };

    case AUTH_LOGOUT:
      return {
        logged: false,
      };

    default:
      return state;
  }
};

export default authReducer;
