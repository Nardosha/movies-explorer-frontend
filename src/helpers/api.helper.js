import { MAIN_API_URL } from "../constants/api";
import { SERVER_ERROR_TEXT } from "../constants/validation";

export const checkResponse = (res) => {
  const result = res.json();
  if (res.ok) return result;

  return result.then((err) =>
    Promise.reject(`${err?.message || err?.statusText || SERVER_ERROR_TEXT}`),
  );
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
