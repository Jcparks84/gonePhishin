import React, { useState, useEffect } from 'react';
import axios from "axios";


const Requests = (props) =>{

    const api = process.env.REACT_APP_API_KEY; 
    const token = JSON.parse(sessionStorage.getItem('data'));
    const token = user.data.id;
    const [randomShow, setRandomShow] = useState([])


    const fetchRandomBrewery = async () => {
        try {
            const res = await axios.get(
                `https://famous-quotes4.p.rapidapi.com/random`,
                {
                    headers: {
                        'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
                        'x-rapidapi-key': API_KEY
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
