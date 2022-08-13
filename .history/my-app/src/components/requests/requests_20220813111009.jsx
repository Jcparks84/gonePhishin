import React, { useState, useEffect } from 'react';
import axios from "axios";


const Requests = (props) =>{

    const api = 'your api'; 
    const token = JSON.parse(sessionStorage.getItem('data'));
    const token = user.data.id;
    const [randomShow, setRandomShow] = useState([])



    async function getRandomShow() {
        let response = await axios.get(
            `http://phish.in/api/v1/random-show`
            );
        console.log("Response", response.data);
        setRandomShow([response.data]);
      }

      useEffect(() => {
        getRandomShow([randomShow]);
      }, []);

      return(
        <div>
            {randomShow}
        </div>
    )


}


export default Requests;



            `http://phish.in/api/v1/random-show`
