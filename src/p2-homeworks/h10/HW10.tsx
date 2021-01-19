import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, loadingReducer} from "./bll/loadingReducer";
import Preloader from "./Preloader/Preloader";

function HW10() {
  const dispatch = useDispatch();
  const loading = useSelector<AppStoreType>(state => state.loadingReducer.loading)

  setTimeout(() => {
    dispatch(loadingAC(false));
  }, 2000);

  const setLoading = () => {
    setTimeout(() => {
      dispatch(loadingAC(true));
    }, 2000);
  };
  return (
    <div>
      <hr/>
      homeworks 10
      {loading
        ? (
          <Preloader />
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  );
}

export default HW10;
