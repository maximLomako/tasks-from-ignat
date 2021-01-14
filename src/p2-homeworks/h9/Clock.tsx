import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId)
  }
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000);
    setTimerId(id);
  }

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };

  const addZero = (time: number): string | number => {
    let res = '';
    if (time < 10) {
      return res = "0" + time;
    }
    return time;
  }

  const stringTime = date ? `Time ${addZero(+date?.getHours())}:${addZero(+date?.getMinutes())}:${addZero(+date?.getSeconds())}` : 'time'; // fix with date
  const stringDate = date ? `Date: ${date?.getFullYear()}-${addZero(+date?.getMonth() + 1)}-${addZero(+date?.getDate())}` : 'date'; // fix with date

  return (
    <div>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
      </div>

      {show && (
        <div>
          {stringDate}
        </div>
      )}

      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>

    </div>
  );
}

export default Clock;
