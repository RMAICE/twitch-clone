export function resetGamesTop() {
  return {
    type: "RESET_GAMES_LIST"
  };
}

export function getGames() {
  return {
    type: "FETCH_GAMES_REQUEST"
  };
}

export function resetStreamsByGame() {
  return {
    type: "RESET_STREAMS_BY_GAME_LIST"
  };
}

export function getStreamsByGame(game_id) {
  return {
    type: "FETCH_STREAMS_BY_GAME_REQUEST",
    data: { game_id }
  };
}

export function twitchEmbed() {
  return {
    type: "FETCH_TWITCH_EMBED_SUCCESS",
    data: true
  };
}

export function getTokenId(code) {
  return {
    type: "GET_TOKEN_ID_REQUEST",
    data: code
  };
}

export function revokeTokenId(access_token) {
  return {
    type: "REVOKE_TOKEN_ID_REQUEST",
    data: access_token
  };
}

export function addWarn(message) {
  return {
    type: "ADD_WARN_MESSAGE",
    data: message
  };
}
