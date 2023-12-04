import React from "react";
import { useContextState } from "../../Context/ContextProvider";
import ShowForecast from "./ShowForecast";

function NextWeek() {
  const { state } = useContextState();
  const { weather } = state;

  return (
    weather && (
      <>
        <h5 className="capitalize">daily forecast</h5>
        <div className="flex flex-row justify-between py-8 border-t-2 border-gray-400/25 overflow-x-auto gap-x-3">
          {weather.forecast.forecastday.map((elem, Index) => {
            return (
              <ShowForecast
                key={Index}
                date={elem.date}
                text={elem.day.condition.text}
                avgtemp_c={elem.day.avgtemp_c}
                icon={elem.day.condition.icon}
              />
            );
          })}
        </div>
      </>
    )
  );
}

export default NextWeek;
