import './App.css';
import Navbar from './components/navbar/navBar'
import ReactMusicPlayer from 'react-music-player';


function App() {
  return (
    <div className="App">
      <Navbar fixed="top" />
      <ReactMusicPlayer autoplay />
    </div>
  );
}

export default App;
