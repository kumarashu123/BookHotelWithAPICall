
import { call, put, takeEvery } from 'redux-saga/effects'
import {getMemberList} from '../api'
import * as types from "../actions/constants"

function* getMembers({type, payload}) {
   try {
      const memberList = yield call(getMemberList);
      yield put({type: types.MEMBERLIST_SUCCESS, payload: memberList});
   } catch (e) {
      yield put({type: types.MEMBERLIST_FAILURE, payload: e});
   }
}

function* watchGetMemberList() {
  yield takeEvery(types.MEMBERLIST_REQUEST, getMembers);
}

export default watchGetMemberList;