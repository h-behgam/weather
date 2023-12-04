import React from "react";
import Summary from "./Summary";
import NextWeek from "./NextWeek";
import Hourly from "./Hourly";
import Details from "./Details";

function Index() {
  return (
    <div className="container bg-slate-100/90 rounded-xl p-2.5 lg:w-5/6 xl:w-5/6 2xl:w-4/6 lg:p-6 leading-9 md:text-lg">
      <Summary />
      <Details />
      <NextWeek />
      <Hourly />
    </div>
  );
}

export default Index;
