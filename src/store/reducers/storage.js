import Cookies from "js-cookie";

const initalState = {
  games: [],
  streamsByGame: [],
  embedLoaded: false,
  warn: {},
  auth: Cookies.get("react_app_auth") ? true : false,
  error: ""
};

export default function(state = initalState, action) {
  switch (action.type) {
    case "RESET_GAMES_LIST":
      return {
        ...state,
        games: []
      };

    case "FETCH_GAMES_SUCCESS":
      return {
        ...state,
        games: action.data
      };

    case "FETCH_GAMES_FAILED":
      return {
        ...state,
        error: `Ошибка при загрузке игр:${action.data}`
      };

    case "RESET_STREAMS_BY_GAME_LIST":
      return {
        ...state,
        streamsByGame: []
      };

    case "FETCH_STREAMS_BY_GAME_SUCCESS":
      return {
        ...state,
        streamsByGame: action.data
      };

    case "FETCH_STREAMS_BY_GAME_FAILED":
      return {
        ...state,
        error: `Ошибка при загрузке стримов: ${action.data}`
      };

    case "FETCH_TWITCH_EMBED_SUCCESS":
      return {
        ...state,
        embedLoaded: action.data
      };

    case "GET_TOKEN_ID_SUCCESS":
      return {
        ...state,
        auth: action.data
      };

    case "GET_TOKEN_ID_FAILED":
      return {
        ...state,
        error: `Ошибка при попытке входа: ${action.data}`
      };

    case "REVOKE_TOKEN_ID_SUCCESS":
      return {
        ...state,
        auth: action.data
      };

    case "REVOKE_TOKEN_ID_FAILED":
      return {
        ...state,
        error: `Ошибка при попытке выхода: ${action.data}`
      };

    case "FETCH_USER_FAILED":
      return {
        ...state,
        error: action.data
      };

    default:
      return state;
  }
}
