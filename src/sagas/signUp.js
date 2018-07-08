import { call, put, takeEvery } from "redux-saga/effects";
import { createUser } from "../api";
import * as types from "../actions/constants";

function* createNewUser({ type, payload }) {
  try {
    const user = yield call(createUser, payload);
    yield put({ type: types.SIGNUP_SUCCESS, payload: user });
  } catch (e) {
    yield put({ type: types.SIGNUP_FAILURE, payload: e });
  }
}

function* watchCreateUser() {
  yield takeEvery(types.SIGNUP_REQUEST, createNewUser);
}

export default watchCreateUser;
