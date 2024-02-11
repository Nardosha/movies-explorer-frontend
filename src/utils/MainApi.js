import { makeRequest } from "../helpers/api.helper";
import { MOVIES_API_URL } from "../constants/api";

export const signup = async ({ name, email, password }) => {
  console.log("signup", { name, email, password });

  return makeRequest("signup", "POST", false, { name, email, password });
};

export const signIn = async ({ email, password }) => {
  console.log("signIn", { email, password });

  return makeRequest("signin", "POST", true, { email, password });
};

export const getUserInfo = async () => {
  console.log("getUserInfo");

  return makeRequest("users/me", "GET", true);
};

export const signOut = async () => {
  console.log("logout");

  return makeRequest("signout", "delete", true);
};

export const getSavedMovies = async () => {
  console.log("getSavedMovies");

  return makeRequest("movies", "GET", true);
};

export const saveMovie = async (data) => {
  console.log("saveMovie");
  return makeRequest("movies", "POST", true, data);
};
