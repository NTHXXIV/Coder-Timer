import { useState, useRef } from "react";
import { formatTime } from "./formatTime";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);

  const [isStart, setIsStart] = useState(false);
  const active = useRef(null);
  const refInterval = useRef(null);
  const [timeStorage, setTimeStorage] = useState([]);

  const splitTime = () => {
    setTimeStorage((prevTimeStorage) => [
      ...prevTimeStorage,
      `${formatTime(time)}`,
    ]);
  };
  const startTimer = () => {
    setIsStart(true);
    refInterval.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    setIsStart(false);
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    setIsStart(false);
    setTime(0);
    setTimeStorage([]);
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    isStart,
    timeStorage,
    splitTime,
  };
};
export default useTimer;
