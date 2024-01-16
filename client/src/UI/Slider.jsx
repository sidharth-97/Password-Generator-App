import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value, setLength) {
  setLength(value); 
}

export default function LengthSlider({setLength}) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={(value) => valuetext(value, setLength)}
        color="primary"
        min={3}
        max={50}
      />
    </Box>
  );
}
