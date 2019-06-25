import axios from "axios";
import Cookies from "js-cookie";

export default function fetchUserInfo() {
  let url = `https://id.twitch.tv/oauth2/userinfo`;
  let config = {
    method: "get",
    url,
    headers: {
      Authorization: `Bearer ${Cookies.get("react_app_auth")}`
    }
  };

  return axios(config).then(res => res.data);
}
