/**
 * Helper Functions for the App
 */

//  check for authenticated user
const token = localStorage.getItem("token");
export const AuthChecker = () => {
  if (token !== null && token !== undefined && token !== "") return true;
  return false;
};
