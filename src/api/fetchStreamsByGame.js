import axios from "axios";
import { headers } from "../api";

function fetchStreamDataByUserId({ data }) {
  let streamsData = data;
  let queryArr = streamsData.map(v => {
    return `id=${v.user_id}`;
  });

  return axios
    .get(`https://api.twitch.tv/helix/users?${queryArr.join("&")}`, { headers })
    .then(usersResponse => {
      let usersArray = usersResponse.data.data;
      let newStreamsData = streamsData.map((streamObjValues, i) => {
        return {
          ...streamObjValues,
          login: usersArray[i].login,
          profile_image_url: usersArray[i].profile_image_url
        };
      });

      return newStreamsData;
    });
}

export default function fetchStreamsByGame(game_id) {
  return axios
    .get(`https://api.twitch.tv/helix/streams?game_id=${game_id}`, { headers })
    .then(streamsResponse => {
      return fetchStreamDataByUserId(streamsResponse.data);
    })
    .then(combinedResponse => {
      return combinedResponse;
    });
}
