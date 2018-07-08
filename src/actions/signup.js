import * as types from "./constants";

export const createUser = userData => ({
  type: types.SIGNUP_REQUEST,
  payload: userData
});
