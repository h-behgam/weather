import React from "react";
import { useContextState } from "../../Context/ContextProvider";
import ShowForecast from "./ShowForecast";

function Hourly() {
  const { state } = useContextState();
  const { weather } = state;

  return (
    weather && (
      <>
        <h5 className="capitalize">hourly forecast</h5>
        <div className="flex flex-row justify-between py-8 border-t-2 border-gray-400/25 overflow-x-auto overscroll-x-auto">
          {weather.forecast.forecastday[0].hour
            .filter((elem) => {
              return elem.time_epoch >= weather.location.localtime_epoch;
            })
            .concat(
              weather.forecast.forecastday[1].hour.filter((elem) => {
                return elem.time_epoch >= weather.location.localtime_epoch;
              })
            )
            .map((elem, index) => {
              if (index > 23) return null;
              return (
                <ShowForecast
                  key={elem.time_epoch}
                  hour={elem.time}
                  text={elem.condition.text}
                  avgtemp_c={elem.temp_c}
                  icon={elem.condition.icon}
                />
              );
            })}
        </div>
      </>
    )
  );
}

export default Hourly;
