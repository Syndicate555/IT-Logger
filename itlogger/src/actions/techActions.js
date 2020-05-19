import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";

// Get techs from server

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
