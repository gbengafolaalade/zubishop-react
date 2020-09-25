/**
 * Core API connections of the backend
 * All logic for connecting to the backend
 */

// base API
const BASE_API = "http://localhost:5000";

// post/put function
export const Connect = async (path, method, data, token = null) => {
  const response = await fetch(`${BASE_API}/${path}`, {
    method,
    cors: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const GetRequest = async (path) => {
  const response = await fetch(`${BASE_API}/${path}`);
  return response.json();
};
