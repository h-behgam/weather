import React from "react";
import { useContextState } from "../../Context/ContextProvider";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { RiCelsiusFill } from "react-icons/ri";

function Details() {
  const { state } = useContextState();
  const { weather } = state;
  return (
    weather && (
      <div className="flex flex-row py-3 justify-between flex-wrap">
        <p className="text-slate-500 capitalize flex flex-row items-center">
          <WiSunrise className="mr-2 text-slate-950" size={25} />
          rise: {weather.forecast.forecastday[0].astro.sunrise}
        </p>
        <p className="text-slate-500 capitalize flex flex-row items-center">
          <WiSunset className="mr-2 text-slate-950" size={25} />
          set: {weather.forecast.forecastday[0].astro.sunset}
        </p>
        <p className="text-slate-500 capitalize flex flex-row items-center">
          <WiSunset className="mr-2 text-slate-950" size={25} />
          high: {weather.forecast.forecastday[0].day.maxtemp_c}
          <RiCelsiusFill className="ml-0.5" size={20} />
        </p>
        <p className="text-slate-500 capitalize flex flex-row items-center">
          <WiSunset className="mr-2 text-slate-950" size={25} />
          low: {weather.forecast.forecastday[0].day.mintemp_c}
          <RiCelsiusFill className="ml-0.5" size={20} />
        </p>
      </div>
    )
  );
}

export default Details;
