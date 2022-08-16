import './App.css';
import AudioPlayer from './components/audioPlayer/audioPlayer';
import Navbar from './components/navbar/navBar'
import Requests from './components/requests/requests';
import YearPage from './pages/yearPage/yearPage';


function App() {
  const apiKey = process.env.REACT_APP_API_KEY


  return (
    <div className="App">
      <div>
      <Navbar fixed="top" />
      </div>
      <div>
        <AudioPlayer/>
      </div>
      <div>
        <YearPage/>
      </div>
      <Route path="/years" element={<Yea />} />
    </div>
    
  );
}

export default App;
