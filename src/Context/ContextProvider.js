import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";
import UseFetch from "../Hooks/UseFetch";
import { InitialState } from "../Constant/InitialState";
import { config } from "../Config/Config";

const MyContext = React.createContext();

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, InitialState);

  console.log(state);
  const request = (link) => {
    UseFetch(link, dispatch);
  };
  useEffect(() => {
    if (state.weather === null) request(config.get_URLS.get_forecast("shiraz", 7, "no"));
  }, []);

  return <MyContext.Provider value={{ state, dispatch, request }}>{children}</MyContext.Provider>;
}

export const getLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (success) => {
      console.log(success, "success");
      console.log(success.coords.latitude, "latitude");
      console.log(success.coords.longitude, "longitude");
    },
    (error) => console.log(error)
  );
};

export const useContextState = () => {
  const { state, dispatch, request } = useContext(MyContext);
  return { state, dispatch, request };
};

export default ContextProvider;
