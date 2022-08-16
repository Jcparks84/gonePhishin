import './App.css';
import AudioPlayer from './components/audioPlayer/audioPlayer';
import Navbar from './components/navbar/navBar'
import Requests from './components/requests/requests';
import YearPage from './pages/yearPage/yearPage';
import { Routes, Route } from "react-router-dom";



function App() {
  const apiKey = process.env.REACT_APP_API_KEY


  return (
    <div className="App">
      <div>
      <Navbar fixed="top" />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
            <SearchPage setCurrentUser = {setCurrentUser}/>
            <BreweryPage setCurrentUser = {setCurrentUser}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/brewery/:breweryId"
          element={
            // <PrivateRoute>
            <BreweryPage setCurrentUser = {setCurrentUser}/>
            // </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
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
