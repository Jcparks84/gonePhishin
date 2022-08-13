import './App.css';
import AudioPlayer from './components/audioPlayer/audioPlayer';
import Navbar from './components/navbar/navBar'
import Requests from './components/requests/requests';


function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <div>
      <Navbar fixed="top" />
      </div>
      <div>
        {/* <AudioPlayer/> */}
      </div>
      <div>
        {/* <Requests/> */}
      </div>

    </div>
    
  );
}

export default App;
