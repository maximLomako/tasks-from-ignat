import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import {ArrType} from "../../HW7";
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options: ArrType
  onChangeOption: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    onChangeOption(value);
  }

  const mappedOptions = options.map((o, i, arr) => (
    <label key={name + "-" + i}>
      <input className={s.input}
        type={"radio"}
        name={o}
        checked={arr[i] === value}
        value={o}
        onChange={onChangeCallback}
      />
      {o}
    </label>
  ));
  return (
    <>
      {mappedOptions}
    </>
  );
}

export default SuperRadio;
