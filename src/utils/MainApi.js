import { makeRequest } from "../helpers/api.helper";

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
