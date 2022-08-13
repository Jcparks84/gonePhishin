import React, { useState, useEffect } from 'react';


const Requests = (props) =>{

    const [randomShow, setRandomShow] = useState([])


    async function getRandomShow(search) {
        let response = await axios.get(
            `http://phish.in/api/v1/random-show`
            
        );

}
}

export default Requests;



