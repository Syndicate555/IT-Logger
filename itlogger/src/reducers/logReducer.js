import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "../actions/types";

const initalState = {
  log: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
