import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const initState = {
  isAuth: false,
  token: "",
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
