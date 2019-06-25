import { put, takeLatest } from "redux-saga/effects";
import api from "../../api";

function* fetchUserInfoWorker(action) {
  try {
    const userInfo = yield api.fetchUserInfo();
    yield put({ type: "FETCH_USER_SUCCESS", data: userInfo });
  } catch (e) {
    yield put({
      type: "FETCH_USER_FAILED",
      data: e.message
    });
    throw e;
  }
}

export function* fetchUserInfoWatcher() {
  yield takeLatest("FETCH_USER_REQUEST", fetchUserInfoWorker);
}
