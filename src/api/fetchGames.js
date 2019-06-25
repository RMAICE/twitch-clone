import axios from "axios";
import { headers } from "../api";

export default function fetchGames() {
  return axios
    .get("https://api.twitch.tv/helix/games/top?first=30", { headers })
    .then(res => res.data);
}
