import { makeRequest } from "../helpers/api.helper";
import { createMovie } from "../helpers/movie.helper";

export const signup = ({ name, email, password }) => {
  return makeRequest("signup", "POST", false, { name, email, password });
};

export const signIn = ({ email, password }) => {
  return makeRequest("signin", "POST", true, { email, password });
};

export const getUserInfo = () => {
  return makeRequest("users/me", "GET", true);
};

export const updateUserInfo = ({ name, email }) => {
  return makeRequest("users/me", "PATCH", true, { name, email });
};

export const signOut = () => {
  return makeRequest("signout", "delete", true);
};

export const loadSavedMovies = async () => {
  return makeRequest("movies", "GET", true);
};

export const saveMovie = (data) => {
  const movie = createMovie(data);

  return makeRequest("movies", "POST", true, movie);
};

export const deleteMovie = (id) => {
  return makeRequest(`movies/${id}`, "delete", true);
};
