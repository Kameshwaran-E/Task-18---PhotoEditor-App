import React from "react";
import {Slider} from '@mui/material'

const SliderRange = ({ min, max, value, handleChange }) => {
  return (
    <div className="slider-container">
           <Slider 
           color="primary"
           orientation="horizontal"
           size="lg"
           variant="solid"
           className="slider"
           min={min}
           max={max}
           value={value}
           onChange={handleChange} />
    
      
    </div>
  );
};

export default SliderRange;
