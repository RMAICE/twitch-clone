import { all } from "redux-saga/effects";
import { fetchStreamsByGameWatcher } from "./fetchStreamsByGameSaga";
import { fetchGamesWatcher } from "./fetchGamesSaga";
import { getTokenIdWatcher } from "./getTokenIdSaga";
import { fetchUserInfoWatcher } from "./fetchUserInfoSaga";
import { revokeTokenIdWatcher } from "./revokeTokenIdSaga";

export default function* rootSaga() {
  yield all([
    fetchGamesWatcher(),
    fetchStreamsByGameWatcher(),
    getTokenIdWatcher(),
    fetchUserInfoWatcher(),
    revokeTokenIdWatcher()
  ]);
}
