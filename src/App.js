import React from "react";
// import { config } from "./Config/Config";
import Title from "./Components/Title/Title";
import Form from "./Components/Form/Form";
import ContextProvider from "./Context/ContextProvider";


function App() {
  // console.log(config.get_URLS.get_current("shiraz", "yes"));
  // console.log(config.get_URLS.get_forecast("shiraz"));
  // console.log(config.get_URLS.get_future("shiraz", "2023-11-26"));
  // console.log(config.get_URLS.get_astronomy("shiraz", "2023-11-26"));
  return (
    <ContextProvider>
      <div className="container mx-auto px-2">
        <Title />
        <Form />
      </div>
    </ContextProvider>
  );
}

export default App;
