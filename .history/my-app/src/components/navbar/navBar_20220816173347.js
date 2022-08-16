import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './navBar.css';
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../images/phish.png'



function NavBar() {
  const navigate = useNavigate();
  return (
    <div className='navContainer'>
      <div className='navBar'>
      <h2 to="/" style={{ textDecoration: "none", color: "beige" }}>
          {" "}
           GonePhishin`{" "} <logo/>
        </h2>
      </div>
    </div>
  );
}


export default NavBar;

