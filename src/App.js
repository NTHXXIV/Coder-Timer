import useTimer from "./useTimer";
import { formatTime } from "./formatTime";
import { useState } from "react";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active, isStart } =
    useTimer(0);

  const [timeStorage, setTimeStorage] = useState([]);
  const splitTime = () => {
    setTimeStorage((prevTimeStorage) => [
      ...prevTimeStorage,
      `${formatTime(time)}`,
    ]);
  };
  console.log(timeStorage);
  // console.log(getTimeRef.current);
  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button
            className="button"
            ref={active}
            disabled={isStart}
            onClick={startTimer}
          >
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={splitTime}>
            {" "}
            Split Time
          </button>
        </div>
        {timeStorage.map((e, index) => {
          return (
            <div key={index} className="timer__wrapper">
              <div className="timer__display">
                <p id="timer__split">{e}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
