import React from "react";
import { Nabvar } from "./Navbar";
import { Card } from "./Card";
import { Card2 } from "./Card2";

const App =()=>{
  return(
    <div className="mt-5">
      <Nabvar />
      <div className="flex container m-auto mt-3 justify-between gap-5">
      <Card />
      <Card />
      <Card />
      </div>
      <p>CWPP Dashboard</p>
      <div className="flex container m-auto mt-3 justify-between gap-5">
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </div>
  );
}

export default App;