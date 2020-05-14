import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "../actions/types";

const initalState = {
  log: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
