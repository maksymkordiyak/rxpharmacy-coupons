export const baseUrl = ""; // "https://staging-una-engine.herokuapp.com";
import queryString from "query-string";
import _ from "underscore";

export const opts = {
  mode: "cors",
  cache: "no-cache",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Request-Headers": "Content-Type",
  },
};

export const fetchError = response => {
  if (response && response.error) {
    const {error} = response;
    throw {error}; // eslint-disable-line no-throw-literal
  } else {
    throw {error: {message: "Something went wrong!"}}; // eslint-disable-line no-throw-literal
  }
};
const throwErrorResponse = resp => {
  throw resp;
};
const qs = params =>
  !_.isEmpty(params) ? `?${queryString.stringify(params)}` : "";

const processResponse = async resp => {
  const body = await resp.json();

  if (!body.data) {
    return resp.ok ? body : throwErrorResponse(body);
  }

  return resp.ok && body.success ? body.data : throwErrorResponse(body.error);
};

export const get = async (url, params = {}) => {
  const response = await fetch(`${baseUrl}${url}${qs(params)}`, {
    ...opts,
    method: "GET",
  }).catch(fetchError);

  return processResponse(response);
};

export const post = async (url, body = {}) => {
  const fetchOpts = {
    ...opts,
    method: "POST",
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseUrl}${url}`, fetchOpts).catch(err => {
    fetchError(err);
  });

  return processResponse(response);
};

export const put = async (url, body = {}) => {
  const response = await fetch(`${baseUrl}${url}`, {
    ...opts,
    method: "PUT",
    body: JSON.stringify(body),
  }).catch(fetchError);

  return processResponse(response);
};
