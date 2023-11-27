import React, { useContext, useReducer } from "react";
import { reducer } from "./Reducer";
import UseFetch from "../Hooks/UseFetch";
import { InitialState } from "../Constant/InitialState";

const MyContext = React.createContext();

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, InitialState);
  console.log(state);
  const request = (link) => {
    UseFetch(link, dispatch);
  };
  return <MyContext.Provider value={{ state, dispatch, request }}>{children}</MyContext.Provider>;
}

export const useContextState = () => {
  const { state, dispatch, request } = useContext(MyContext);
  return { state, dispatch, request };
};

export default ContextProvider;
