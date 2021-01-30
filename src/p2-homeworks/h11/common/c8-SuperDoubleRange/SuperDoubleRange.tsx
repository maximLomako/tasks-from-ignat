import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: number[]) => void
  value?: number[]
  // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange, value,
    // min, max, step, disable, ...
  }
) => {

  const handleChange = (e: ChangeEvent<{}>, newValue: number[]) => {
    if (onChangeRange) {
      onChangeRange(newValue as number[]);
    }
  };

  return (
    <div style={{width: 250, margin: 30}}>
      <Slider
        value={value}
        // @ts-ignore
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}


export default SuperDoubleRange;
