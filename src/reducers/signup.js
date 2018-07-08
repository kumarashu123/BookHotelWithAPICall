import * as types from "../actions/constants";

const initialState = {
  userCreated: false
};

const createUser = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return state;
    case types.SIGNUP_SUCCESS:
      return { ...state, userCreated: true };
    case types.SIGNUP_FAILURE:
      return state;
    default:
      return state;
  }
};

export default createUser;
