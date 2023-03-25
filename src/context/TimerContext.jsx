import { createContext, useContext, useReducer } from "react";
import { init, initialState, reducer } from "../utils/reducer";

const StateContext = createContext(null);
const DispatchContext = createContext(null);

export function TimerContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useTimerState() {
  return useContext(StateContext);
}

export function useTimerDispatch() {
  return useContext(DispatchContext);
}
