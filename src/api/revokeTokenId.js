import axios from "axios";
import { headers } from "../api";

export default function revokeTokenId(access_token) {
  let config = {
    method: "post",
    url: `https://id.twitch.tv/oauth2/revoke?client_id=${
      headers["Client-ID"]
    }&token=${access_token}`
  };

  return axios(config);
}
