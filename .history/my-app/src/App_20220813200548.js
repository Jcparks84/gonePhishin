import './App.css';
import AudioPlayer from './components/audioPlayer/audioPlayer';
import Navbar from './components/navbar/navBar'
import Requests from './components/requests/requests';


function App() {
  const apiKey = process.env.REACT_APP_API_KEY
  console.log(apiKey);
  return (
    <div className="App">
      <div>
      <Navbar fixed="top" />
      </div>
      <div>
        <AudioPlayer/>
      </div>
      <div>
      </div>

    </div>
    
  );
}

export default App;
