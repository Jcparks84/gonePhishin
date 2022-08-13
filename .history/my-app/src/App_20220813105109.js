import './App.css';
import AudioPlayer from './components/audioPlayer/audioPlayer';
import Navbar from './components/navbar/navBar'


function App() {
  return (
    <div className="App">
      <div>
      <Navbar fixed="top" />
      </div>
      <div>
        <AudioPlayer/>
      </div>
      <div>
        <Request
      </div>

    </div>
    
  );
}

export default App;
