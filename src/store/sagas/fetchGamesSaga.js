import { put, takeEvery } from "redux-saga/effects";
import api from "../../api";

function* fetchGamesWorker(action) {
  try {
    const games = yield api.fetchGames();
    yield put({ type: "FETCH_GAMES_SUCCESS", data: games.data });
  } catch (e) {
    yield put({
      type: "FETCH_GAMES_FAILED",
      data: e.message
    });
    throw e;
  }
}

export function* fetchGamesWatcher() {
  yield takeEvery("FETCH_GAMES_REQUEST", fetchGamesWorker);
}
