
import { call, put, takeEvery } from 'redux-saga/effects'
import {login} from '../api'
import * as types from "../actions/constants"


function* validateUser({type, payload}) {
   try {
      const user = yield call(login, payload.username, payload.password);
      yield put({type: types.LOGIN_SUCCESS, payload: user});
   } catch (e) {
      yield put({type: types.LOGIN_FAILURE, payload: e});
   }
}

function* watchValidateUser() {
  yield takeEvery(types.LOGIN_REQUEST, validateUser);
}

export default watchValidateUser;