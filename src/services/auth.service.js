/**
 * Authentication services for the App
 * Logs user in if token is set
 * Register user and set token for authentication
 */

import { Connect, GetRequest } from "./api.core";

//  Login handler
export const LoginHandler = async (data) => {
  try {
    const response = await Connect("api/v1/auth/login", "POST", data, "");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Register handler
export const SignupHandler = async (data) => {
  try {
    const response = await Connect("api/v1/auth/register", "POST", data, "");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Logout handler
export const LogoutHandler = async (token) => {
  try {
    const response = await GetRequest(`api/v1/auth/me/${token}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
