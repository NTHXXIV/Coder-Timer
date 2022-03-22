import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);

  const [isStart, setIsStart] = useState(false);
  const active = useRef(null);
  const refInterval = useRef(null);

  const startTimer = () => {
    setIsStart(true);
    console.log(isStart);
    refInterval.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    console.log(active);
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    setIsStart(false);
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    setIsStart(false);
    setTime(0);
  };

  return { time, startTimer, stopTimer, resetTimer, active, isStart };
};
export default useTimer;
