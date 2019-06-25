import { put, takeEvery } from "redux-saga/effects";
import api from "../../api";

function* fetchStreamsByGameWorker(action) {
  try {
    const { game_id, access_token } = action.data;
    const streamsByGame = yield api.fetchStreamsByGame(game_id, access_token);
    yield put({
      type: "FETCH_STREAMS_BY_GAME_SUCCESS",
      data: streamsByGame
    });
  } catch (e) {
    yield put({
      type: "FETCH_STREAMS_BY_GAME_FAILED",
      data: e.message
    });
    throw e;
  }
}

export function* fetchStreamsByGameWatcher() {
  yield takeEvery("FETCH_STREAMS_BY_GAME_REQUEST", fetchStreamsByGameWorker);
}
