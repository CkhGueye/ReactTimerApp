import SvgCircle from "../SvgCircle";
import { dimension } from "../../utils/formula";
import "./styles.css";
import { useTimerState } from "../../context/TimerContext";

export default function TimeIndicator() {
  const width = 300;
  const padding = 36;
  const { isSession, minutes, seconds } = useTimerState();
  const { innerShadow, ...other } = dimension(width, padding);

  return (
    <div id="timer-label">
      <div className="wrapper" style={{ padding }}>
        <div className="inner-shadow" style={innerShadow.style}>
          <span>{isSession ? "Session" : "Break"}</span>
          <span id="time-left">
            {String(minutes).padStart(2, "0") +
              ":" +
              String(seconds).padStart(2, "0")}
          </span>
          <SvgCircle dimension={other} />
        </div>
      </div>
    </div>
  );
}
