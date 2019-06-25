const initialState = {
  picture: "",
  name: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        picture: action.data.picture,
        name: action.data.preferred_username
      };

    default:
      return state;
  }
}
