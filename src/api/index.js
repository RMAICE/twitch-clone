import fetchGames from "./fetchGames";
import fetchStreamsByGame from "./fetchStreamsByGame";
import getTokenId from "./getTokenId";
import fetchUserInfo from "./fetchUserInfo";
import revokeTokenId from "./revokeTokenId";
import Cookies from "js-cookie";

function createHeaders() {
  let access_token = Cookies.get("react_app_auth") || "";

  return {
    "Client-ID": "izxh1rvk9shmmposg8pj9ihw0c0vc5",
    Authorization: `Bearer ${access_token}`
  };
}

export const headers = createHeaders();

export default {
  fetchGames,
  fetchStreamsByGame,
  getTokenId,
  revokeTokenId,
  fetchUserInfo
};
