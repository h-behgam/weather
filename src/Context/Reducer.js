import { ACTIONS } from "../Constant/Actions";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SEARCH:
      return {...state,
        loading: false,
        weather: payload
      };
    case ACTIONS.ERROR:
      return {
        loading: false,
        weather: null,
        error: payload
      };

    default:
      return state;
  }
};
