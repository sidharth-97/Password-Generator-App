import React from "react";
import Display from "../UI/Display";
import Selectors from "./Selectors";

const Generator = () => {
  return (
    <div className=" border border-spacing-2 flex justify-center items-center p-5">
      <div className="flex flex-col">
        <h1 className="text-center text-xl pb-3 font-semibold">Password Generator</h1>
        <div>
          <div className="pb-4"><Display/></div>
          <div><Selectors /></div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
