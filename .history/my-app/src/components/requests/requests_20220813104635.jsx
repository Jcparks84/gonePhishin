import React, { useState, useEffect } from 'react';


const Requests = (props) =>{

    const [randomShow, setRandomShow] = useState([])


    async function get() {
        let response = await axios.get(
            `http://phish.in/api/v1/random-show`
            );
        console.log("getBrewery Response", response.data);
        setBrewery([response.data]);
      }
}

export default Requests;



            `http://phish.in/api/v1/random-show`
