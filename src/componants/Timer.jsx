import { useEffect, useState } from "react";
import Button from "./Button";
import Label from "./Label";
import TimeIndicator from "./timeIndicator/Index";
import Audio from "./Audio";
import { useTimerDispatch, useTimerState } from "../context/TimerContext";

export default function Timer() {
  const audio = document.getElementById("beep");
  const state = useTimerState();
  const dispatch = useTimerDispatch();
  const [timer, setTimer] = useState(null);

  const start = () => {
    dispatch({ type: "start" });
    setTimer(
      setInterval(() => {
        dispatch({ type: "run" });
      }, 1000)
    );
  };

  const stop = () => {
    clearInterval(timer);
    setTimer(null);
    dispatch({ type: "stop" });
  };

  useEffect(() => {
    if (state.isRunning) {
      if (state.minutes === 0 && state.seconds === 0) {
        audio.play();
        setTimeout(() => {
          !audio.paused && audio.pause();
        }, 2000);
      }
    }
  }, [state.isRunning, state.seconds, state.minutes, audio]);

  const increment = (stateVal, stateType) => {
    if (!state.isRunning) {
      if (stateVal >= 60) {
        return false;
      }
      dispatch({ type: "increment", stateType });
    }
  };

  const decrement = (stateVal, stateType) => {
    if (!state.isRunning) {
      if (stateVal <= 1) {
        return false;
      }
      dispatch({ type: "decrement", stateType });
    }
  };

  const handleStart = () => {
    state.isRunning ? stop() : start();
  };

  const handleReset = () => {
    !audio.paused && audio.pause();
    audio.currentTime = 0;
    stop();
    dispatch({ type: "reset" });
  };

  useEffect(() => {
    dispatch({ type: "restart", val: state.session });
  }, [state.session, dispatch]);

  return (
    <div className="container">
      <TimeIndicator />
      <div className="controls">
        <div id="session-label" className="label">
          <Button
            id="session-decrement"
            type="minus"
            handleClick={() => decrement(state.session, "session")}
          />
          <Label
            id="session-length"
            text="Session Length"
            value={state.session}
          />
          <Button
            id="session-increment"
            type="plus"
            handleClick={() => increment(state.session, "session")}
          />
        </div>
        <div id="break-label" className="label">
          <Button
            id="break-decrement"
            type="minus"
            handleClick={() => decrement(state.break, "break")}
          />
          <Label id="break-length" text="Break Length" value={state.break} />
          <Button
            id="break-increment"
            type="plus"
            handleClick={() => increment(state.break, "break")}
          />
        </div>
        <div className="block-btn">
          <Button id="reset" label="Reset" handleClick={handleReset} />
          <Button
            id="start_stop"
            label={state.isRunning ? "Stop" : "Start"}
            handleClick={handleStart}
          />
        </div>
      </div>
      <Audio />
    </div>
  );
}
