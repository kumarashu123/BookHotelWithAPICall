import { all } from "redux-saga/effects";
import watchValidateUser from "./login";
import watchCreateUser from "./signUp";
import watchGetMemberList from "./memberList";
import watchGetHotelList from "./hotelList";

function* rootSaga() {
  yield all([
    watchValidateUser(),
    watchCreateUser(),
    watchGetMemberList(),
    watchGetHotelList()
  ]);
}

export default rootSaga;
