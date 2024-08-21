import React from "react";

export const Nabvar = () =>{
  return(
    <div className="flex container m-auto justify-between ">
      <p className="text-l font-bold">CNAPP Dashboard</p>
      <div>
      <button className="shadow-md bg-white">Add Widget +</button>
      <button className="bg-white h-[1rem] w-[1rem] shadow-md mx-4"><img src="https://icons.veryicon.com/png/o/miscellaneous/life-linear-icon/refresh-151.png" alt=""/></button>
      </div>
    </div>
  )
}