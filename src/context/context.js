import React, { createContext, useReducer } from "react";
import rootReducer from "../reducers";

export const context = createContext();
context.displayName = "posts";

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {});

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};
