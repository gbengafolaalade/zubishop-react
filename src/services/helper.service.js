/**
 * Helper Functions for the App
 */

//  check for authenticated user
const token = localStorage.getItem("token");
export const AuthChecker = () => {
  if (token !== null && token !== undefined && token !== "") return true;
  return false;
};

// generate token for authorization
export const TokenGeneration = (strLen) => {
  strLen = typeof strLen === "number" && strLen > 0 ? strLen : false;

  if (strLen) {
    // possible character to be included
    const possibleCharacters = "ABCDEFGHIJklmnopqrstuvwxyz0123456789";

    let str = "";
    for (let i = 1; i <= strLen; i++) {
      // get random characters from the possible character
      const randomCharacter = possibleCharacters.charAt(
        Math.floor(Math.random() * possibleCharacters.length)
      );

      // append it to string
      str += randomCharacter;
    }

    return str;
  } else {
    return false;
  }
};

// capitalize initial letter
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
