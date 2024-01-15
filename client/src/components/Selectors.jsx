import React from 'react'
import { Checkbox } from '@mui/material';
import LengthSlider from '../UI/Slider';

const Selectors = () => {
  return (
      <div>
          <h1 className='text text-2xl'>Customise your password</h1>
          <div className='flex flex-row gap-2 mt-3'>
        <div className='flex flex-col'>
          <span>Password length : </span>
          <LengthSlider/>
          
        </div>
        <div className='flex flex-col'>
          <span> <Checkbox />Uppercase</span>
          <span> <Checkbox />Lowercase</span>
          <span> <Checkbox />Numbers</span>
          <span> <Checkbox />Symbols</span>
        </div>
          </div>
         
    </div>
  )
}

export default Selectors