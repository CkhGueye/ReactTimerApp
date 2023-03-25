import Timer from "./componants/Timer";
import Footer from "./componants/Footer";
import { TimerContextProvider } from "./context/TimerContext";

export default function App() {
  return (
    <TimerContextProvider>
      <Timer />
      <Footer />
    </TimerContextProvider>
  );
}
