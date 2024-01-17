import React, { useState } from "react";
import Display from "../UI/Display";
import Selectors from "./Selectors";

const Generator = () => {
  const [password, setPassword] = useState("")
  const handlePassword = (password) => {
    setPassword(password)
  }
  console.log(password);
  return (
    <div className=" border border-spacing-2 flex justify-center items-center p-5 w-3/4">
      <div className="flex flex-col w-3/4">
        <h1 className="text-center text-xl pb-3 font-semibold">Password Generator</h1>
        <div>
          <div className="pb-4"><Display password={password}/></div>
          <div className="flex items-center justify-center w-full"><Selectors password={handlePassword} /></div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
