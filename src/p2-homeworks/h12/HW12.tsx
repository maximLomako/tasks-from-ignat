import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
  const dispatch = useDispatch();
  const theme = useSelector<any, any>(state => state.themeState.theme);
  const onChangeCallback = (text: string) => {
    dispatch(changeThemeC(text));
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

export default HW12;
