import { combineReducers } from "redux";

import storage from "./storage";
import profile from "./profile";

export default combineReducers({
  storage,
  profile
});
