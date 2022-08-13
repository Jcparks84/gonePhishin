import React, { useState, useEffect } from 'react';
import axios from

const Requests = (props) =>{

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
}

// return(
//     <div>
        
//     </div>
// )

export default Requests;



            `http://phish.in/api/v1/random-show`
