export function init(initialState) {
  return initialState;
}

const session = 2;

export const initialState = {
  session: session,
  break: 5,
  isSession: true,
  animationDuration: session,
  minToSec: session * 60,
  minutes: session,
  seconds: 0,
  isRunning: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      if (action.stateType === "session") {
        return {
          ...state,
          session: state.session + 1,
        };
      }
      if (action.stateType === "break") {
        return { ...state, break: state.break + 1 };
      }
      return state;
    }

    case "decrement": {
      if (action.stateType === "session") {
        return { ...state, session: state.session - 1 };
      }
      if (action.stateType === "break") {
        return { ...state, break: state.break - 1 };
      }
      return state;
    }

    case "start": {
      return {
        ...state,
        isRunning: true,
      };
    }

    case "stop": {
      return { ...state, isRunning: false };
    }

    case "run": {
      if (state.isRunning) {
        if (state.minutes === 0 && state.seconds === 0) {
          const newVal = state.isSession ? state.break : state.session;
          return {
            ...state,
            isSession: !state.isSession,
            minutes: newVal,
            seconds: 0,
            minToSec: newVal * 60,
            animationDuration: newVal,
          };
        }
        if (state.seconds === 0) {
          return {
            ...state,
            minutes: state.minutes - 1,
            seconds: 59,
            minToSec: state.minToSec - 1,
          };
        }
        return {
          ...state,
          seconds: state.seconds - 1,
          minToSec: state.minToSec - 1,
        };
      }
      return state;
    }

    case "restart": {
      return {
        ...state,
        minutes: action.val,
        seconds: 0,
        minToSec: action.val * 60,
        animationDuration: action.val,
      };
    }

    case "reset": {
      return init(initialState);
    }

    default: {
      return state;
    }
  }
}
