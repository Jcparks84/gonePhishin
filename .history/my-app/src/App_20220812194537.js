import './App.css';
import Navbar from './components/navbar/navBar'
import AudioPlayer from './components/audioPlayer/audioPlayer';


function App() {
  return (
    <div className="App">
      <Navbar fixed="top" />
      <AudioPlayer/>
    </div>
  );
}

export default App;
