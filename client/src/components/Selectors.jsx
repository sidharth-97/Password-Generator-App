import React, { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import LengthSlider from "../UI/Slider";

const Selectors = ({password}) => {
  const [length, setLength] = useState(0);
  const [upper, setUpper] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const handleLength = (length) => {
    setLength(length);
  };
  function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    let validChars = lowercaseChars;
  
    if (includeUppercase) {
      validChars += uppercaseChars;
    }
  
    if (includeNumbers) {
      validChars += numberChars;
    }
  
    if (includeSymbols) {
      validChars += symbolChars;
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }
  
    return password;
  }
  
  useEffect(() => {
    const pass = generatePassword(length,upper,number,symbol);
    password(pass)
  },[length,upper,number,symbol])
  
  return (
    <div className="w-full">
      <h1 className="text text-center text-2xl">Customise your password</h1>
      <div className="flex flex-row justify-evenly mt-3">
        <div className="flex flex-col">
          <span>Password length :{length} </span>
          <LengthSlider setLength={handleLength} />
        </div>
        <div className="flex flex-col">
          <span>
            <Checkbox onChange={()=>setUpper(!upper)} />
            Uppercase
          </span>
          <span>
            <Checkbox onChange={()=>setNumber(!number)} />
            Numbers
          </span>
          <span>
            <Checkbox onChange={()=>setSymbol(!symbol)} />
            Symbols
          </span>
        </div>
      </div>
    </div>
  );
};

export default Selectors;
