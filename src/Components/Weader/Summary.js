import React from "react";
import { useContextState } from "../../Context/ContextProvider";
import Loader from "../Loader/Loader";
import { WiHumidity, WiStrongWind, WiBarometer, WiThermometer } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import WeatherFeature from "./WeatherFeature";

function Summary() {
  const { state } = useContextState();
  const { loading, weather } = state;

  return (
    <>
      {loading && <Loader />}
      {weather && (
        <>
          <div className="mb-4 text-center sm:text-left">
            <h5>Current Weather</h5>
          </div>
          <div className="flex sm:flex-row justify-between flex-col">
            <div className="sm:max-w-xs w-full">
              <h2 className="text-slate-700 font-semibold text-xl  text-center sm:text-left">
                {weather.location.name},<span className="font-normal text-base"> {weather.location.country}</span>
              </h2>
              <div className="flex flex-col-reverse sm:flex-row items-center justify-center">
                <img src={`http:${weather.current.condition.icon}`} alt={weather.current.condition.text} />
                <p className="text-8xl mr-7 sm:mr-0 sm:ml-10 lg:ml-15 text-slate-500 font-arial">{weather.current.temp_c}</p>
              </div>
              <p className="text-slate-700 font-semibold text-lg text-center sm:text-left">{weather.current.condition.text}</p>
            </div>
            <div className="flex flex-col sm:max-w-xs sm:w-5/12 w-full items-center">
              <WeatherFeature title="humidity" value={weather.current.humidity + " %"} icon={<WiHumidity />} />
              <WeatherFeature title="feels like" value={weather.current.feelslike_c + " °c"} icon={<WiThermometer />} />
              <WeatherFeature title="wind" value={weather.current.wind_kph + " Km"} icon={<WiStrongWind />} />
              <WeatherFeature title="UV Index" value={weather.current.uv} icon={<TbUvIndex />} />
              <WeatherFeature
                title="pressure (mb)"
                value={weather.current.pressure_mb + " mb"}
                icon={<WiBarometer />}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Summary;
