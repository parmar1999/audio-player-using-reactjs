
import AudioPlayer from "./components/AudioPlayer";
import tracks from "./tracks";

function App() {
  return (
    <div>
      <AudioPlayer tracks={tracks} />
    </div>
  );
}

export default App;
