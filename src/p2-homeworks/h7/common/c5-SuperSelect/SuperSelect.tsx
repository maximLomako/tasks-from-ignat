import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import {ArrType} from "../../HW7";
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options: ArrType
  onChangeOption: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions = options.map((o, i) => <option key={i}>{o}</option>); // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    onChangeOption(value);
  }

  return (
    <select className={s.select} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
}

export default SuperSelect;
