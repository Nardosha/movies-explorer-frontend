import { makeRequest } from "../helpers/api.helper";
import { createMovie } from "../helpers/movie.helper";

export const signup = async ({ name, email, password }) => {
  return makeRequest("signup", "POST", false, { name, email, password });
};

export const signIn = async ({ email, password }) => {
  return makeRequest("signin", "POST", true, { email, password });
};

export const getUserInfo = async () => {
  return makeRequest("users/me", "GET", true);
};

export const updateUserInfo = async ({ name, email }) => {
  return makeRequest("users/me", "PATCH", true, { name, email });
};

export const signOut = async () => {
  return makeRequest("signout", "delete", true);
};

export const loadSavedMovies = async () => {
  return makeRequest("movies", "GET", true);
};

export const saveMovie = async (data) => {
  const movie = createMovie(data);

  return makeRequest("movies", "POST", true, movie);
};

export const deleteMovie = async (id) => {
  return makeRequest(`movies/${id}`, "delete", true);
};
