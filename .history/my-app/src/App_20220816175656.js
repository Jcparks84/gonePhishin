import './App.css';
import AudioPlayer from './components/audioPlayer/audioPlayer';
import Navbar from './components/navbar/navBar'
import YearPage from './pages/yearPage/yearPage';



function App() {
  const apiKey = process.env.REACT_APP_API_KEY


  return (
    <div className="App">
      <div>
      <Navbar fixed="top" />
      </div>
      <div>
        <YearPage/>
      </div>
      <div>
        <AudioPlayer/>
      </div>

    </div>
    
  );
}

export default App;
