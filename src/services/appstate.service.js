import React, { createContext, useReducer } from "react";
import AppReducer from "./appreducer.service";

// initial state
const initialState = {
  user: {},
  guestCart: [],
  loading: true,
};

// create context
export const AppContext = createContext(initialState);

// app provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  // set user
  const setUser = (userData) => {
    dispatch({
      type: "SET_USER",
      payload: userData,
    });
  };

  return (
    <AppContext.Provider
      value={{
        user: state.user,
        guestCart: state.guestCart,
        loading: state.loading,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
