import audioSource from "../assets/beep.wav"
export default function Audio() {
  return (
    <audio
      id="beep"
      src={audioSource}
      preload="none"
    ></audio>
  );
}
