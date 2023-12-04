import React from "react";

function ShowForecast({ date, text, avgtemp_c, icon, hour }) {
  const getDayName = (date, hour) => {
    const valentines = new Date(date);
    return !hour
      ? valentines.toLocaleDateString(undefined, { weekday: "long" })
      : valentines.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col items-center justify-center shrink-0">
      {date && <p className="text-base text-slate-500 font-arial">{getDayName(date, false)}</p>}
      {hour && <p className="text-base text-slate-500 font-arial">{getDayName(hour, true)}</p>}
      <img src={`http:${icon}`} alt={text} />
      <p className="text-base text-slate-500 font-arial">{avgtemp_c + " °c"}</p>
    </div>
  );
}

export default ShowForecast;
