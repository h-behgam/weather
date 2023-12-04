import React from "react";
// import { config } from "./Config/Config";
import ContextProvider from "./Context/ContextProvider";
import Wrapper from "./Components/Wrapper/Wrapper";

function App() {
  // console.log(config.get_URLS.get_current("shiraz", "yes"));
  // console.log(config.get_URLS.get_forecast("shiraz"));
  // console.log(config.get_URLS.get_future("shiraz", "2023-11-26"));
  // console.log(config.get_URLS.get_astronomy("shiraz", "2023-11-26"));
  return (
    <ContextProvider>
      <Wrapper />
    </ContextProvider>
  );
}

export default App;
