import { MAIN_API_URL } from "../constants/api";

export const checkResponse = (res) => {
  console.log("checkResponse");
  if (res.ok) return res.json();
  return Promise.reject(`${res.status}`);
};

export const makeRequest = (endpoint, method, isCredentialsInclude, data) => {
  const BASE_URL = MAIN_API_URL;
  const BASE_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const options = {
    headers: BASE_HEADERS,
    method: method,
    credentials: isCredentialsInclude ? "include" : undefined,
    body: data ? JSON.stringify(data) : undefined,
  };

  const url = `${BASE_URL}/${endpoint}`;

  return fetch(url, options).then(checkResponse);
};
