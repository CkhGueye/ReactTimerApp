import { useEffect, useRef } from "react";
import { useTimerState } from "../context/TimerContext";

export default function SvgCircle({ dimension }) {
  const circleRef = useRef(null);
  const { svg, circle, strokeDasharray } = dimension;
  const { animationDuration, minToSec, minutes, seconds } = useTimerState();

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      circleRef.current.style.transitionDuration = "0s";
      setTimeout(() => {
        circleRef.current.style.transitionDuration = "2s";
      }, 1500);
    }
  }, [minutes, seconds]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...svg.dimension}>
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stopColor="#DA22FF" />
          <stop offset="100%" stopColor="#9733EE" />
        </linearGradient>
      </defs>
      <circle
        ref={circleRef}
        {...circle.dimension}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={
          minToSec * (strokeDasharray / (animationDuration * 60))
        }
      />
    </svg>
  );
}
