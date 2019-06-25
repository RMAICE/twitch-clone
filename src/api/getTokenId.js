import axios from "axios";
import { headers } from "../api";

export default function getTokenId(code) {
  let clienId = headers["Client-ID"];
  let clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  let url = `https://id.twitch.tv/oauth2/token?client_id=${clienId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code&redirect_uri=http://localhost`;

  return axios.post(url).then(res => res.data);
}
