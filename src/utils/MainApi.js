import { makeRequest } from "../helpers/api.helper";
import { createMovie } from "../helpers/movie.helper";

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

export const updateUserInfo = async ({ name, email }) => {
  console.log("updateUserInfo");

  return makeRequest("users/me", "PATCH", true, { name, email });
};

export const signOut = async () => {
  console.log("logout");

  return makeRequest("signout", "delete", true);
};

export const loadSavedMovies = async () => {
  console.log("loadSavedMovies");

  return makeRequest("movies", "GET", true);
};

export const saveMovie = async (data) => {
  const movie = createMovie(data);
  console.log("saveMovie", data, movie);

  return makeRequest("movies", "POST", true, movie);
};

export const deleteMovie = async (id) => {
  console.log("deleteMovie", id);

  return makeRequest(`movies/${id}`, "delete", true);
};
