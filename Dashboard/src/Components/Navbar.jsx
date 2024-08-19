import React from "react";

export const Nabvar = () =>{
  return(
    <div className="flex container m-auto justify-between">
      <p className="text-l font-bold">CNAPP Dashboard</p>
      <div>
      <button className="pr-9">Add Widget</button>
      <button>Refresh</button>
      </div>
    </div>
  )
}