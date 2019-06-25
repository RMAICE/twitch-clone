import { put, takeLatest } from "redux-saga/effects";
import api from "../../api";
import Cookies from "js-cookie";

function* revokeTokenIdWorker(action) {
  try {
    yield api.revokeTokenId(action.data);
    Cookies.remove("react_app_auth");
    yield put({ type: "REVOKE_TOKEN_ID_SUCCESS", data: false });
  } catch (e) {
    yield put({ type: "REVOKE_TOKEN_ID_FAILED", data: e.message });
    throw e;
  }
}

export function* revokeTokenIdWatcher() {
  yield takeLatest("REVOKE_TOKEN_ID_REQUEST", revokeTokenIdWorker);
}
