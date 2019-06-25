import { put, takeEvery } from "redux-saga/effects";
import api from "../../api";
import Cookies from "js-cookie";

function* getTokenIdWorker(action) {
  try {
    const code = action.data;
    const token = yield api.getTokenId(code);
    Cookies.set("react_app_auth", token.access_token, {
      expires: new Date(Date.now() + token.expires_in * 1000)
    });
    yield put({ type: "GET_TOKEN_ID_SUCCESS", data: true });
  } catch (e) {
    yield put({
      type: "GET_TOKEN_ID_FAILED",
      data: e.message
    });
    throw e;
  }
}

export function* getTokenIdWatcher() {
  yield takeEvery("GET_TOKEN_ID_REQUEST", getTokenIdWorker);
}
