import React from "react";
import { IconContext } from "react-icons";

const WeatherFeature = (props) => {
  const ShowIcons = (iconName) => {
    return (
      <IconContext.Provider
        value={{
          color: "rgb(125 211 252)",
          size: "29px",
        }}
      >
        {iconName.icon}
      </IconContext.Provider>
    );
  };

  return (
    <div className="flex w-[250px]">
      {props.icon && <ShowIcons icon={props.icon} />}
      <p className="text-slate-500 w-32 mr-5 ml-1">{props.title}</p>
      <p className="text-cyan-700 font-semibold">{props.value}</p>
    </div>
  );
};

export default WeatherFeature;
