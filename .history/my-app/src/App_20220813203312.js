import './App.css';
import AudioPlayer from './components/audioPlayer/audioPlayer';
import Navbar from './components/navbar/navBar'
import Requests from './components/requests/requests';
import YearPage from './pages/yearPage';

import Dropdown from "./Dropdown";
import "./styles.css";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY

  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" }
  ];

  return (
    
    <div className="App">
      <Dropdown
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}


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
        <YearPage/>
      </div>

    </div>
    
  );
}

export default App;
