import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";
export const getLogs = () => {};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
