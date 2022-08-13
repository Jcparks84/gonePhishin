import React, { useState, useEffect } from 'react';
import axios from "axios";
import AudioPlayer from '../audioPlayer/audioPlayer';


const Requests = (props) =>{

    const apiKey = process.env.REACT_APP_API_KEY; 
    const config = {
        headers: { Authorization: `Bearer ${apiKey}` }
    };
    
    const bodyParameters = {
       key: "value"
    };

    
    const [randomShow, setRandomShow] = useState([])


    const fetchRandomShow = async () => {
        try {
            const response = await axios.get(
                `http://phish.in/api/v1/random-show`, config,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'

                    },
                    params: {category: 'all', count: '10'}
                }
            );
        } catch (err) {
            console.log(err);
        }
    };



    async function getRandomShow() {
        let response = await axios.get(
            `http://phish.in/api/v1/random-show`
            );
        console.log("Response", response.data);
        setRandomShow([response.data]);
      }

      useEffect(() => {
        fetchRandomShow([randomShow]);
        console.log(randomShow);
      }, []);

      return(
        <div>
            <AudioPlayer randomShow = {randomShow}/>
        </div>
    )


}


export default Requests;
