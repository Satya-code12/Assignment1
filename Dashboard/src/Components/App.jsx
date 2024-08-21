import React from "react";
import { Nabvar } from "./Navbar";
import { Card } from "./Card";
import { Card2 } from "./Card2";

const App =()=>{
  return(
    <div className="pt-5 bg-slate-100 h-screen">
      <Nabvar />
      <p className="container m-auto font-semibold">CSPM Executive Dashboard</p>
      <div className="flex container m-auto mt-3 justify-between gap-5">
      <Card />
      <Card />
      <Card />
      </div>
      <p className="container m-auto font-semibold mt-3">CWPP Dashboard: </p>
      <div className="flex container m-auto mt-3 justify-between gap-5">
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </div>
  );
}

export default App;