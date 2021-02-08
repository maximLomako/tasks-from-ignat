import React, {useState} from 'react';
import HW12 from "./HW12";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

export default {
  title: 'Example/HW12',
  component: HW12,
}

const themes = ['dark', 'red', 'some'];

export const ExampleHW12 = () => {
  const [state, setState] = useState('some')
  const theme = state
  const onChangeCallback = (text: string) => {
    setState(text);
  }

   return (
    <div className={s[theme]}>
      <hr/>
      <span className={s[theme + '-text']}>
                homeworks 12

            </span>

      <SuperSelect
        value={theme}
        options={themes}
        onChangeOption={onChangeCallback}/>
      <SuperRadio
        value={theme}
        options={themes}
        onChangeOption={onChangeCallback}/>
      <hr/>
    </div>
  );
}
