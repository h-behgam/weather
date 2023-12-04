import React, { useState } from "react";
import { config } from "../../Config/Config";
import { useContextState } from "../../Context/ContextProvider";

function Form() {
  const [city, setCity] = useState(null);
  const { request } = useContextState();

  const submitHandler = async (e) => {
    e.preventDefault();
    request(config.get_URLS.get_current(city, "yes"));
  };
  return (
    <form className="lg:w-5/6 xl:w-5/6 2xl:w-4/6 py-5 sm:py-10 mx-auto" onSubmit={submitHandler}>
      <div>
        <label htmlFor="city"></label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Paris"
          className="w-full py-[11px]  px-1 pl-[30px] rounded-full outline-none"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Form;
