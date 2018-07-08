
import { call, put, takeEvery } from 'redux-saga/effects'
import {getHotelList} from '../api'
import * as types from "../actions/constants"

function* getHotels({type, payload}) {
   try {
      const hotelList = yield call(getHotelList);
      yield put({type: types.HOTEL_SUCCESS, payload: hotelList});
   } catch (e) {
      yield put({type: types.HOTEL_FAILURE, payload: e});
   }
}

function* watchGetHotelList() {
  yield takeEvery(types.HOTEL_REQUEST, getHotels);
}

export default watchGetHotelList;