import React, { useState, useEffect } from 'react';
import axios from "axios"; 
import './yearPage.css';


function YearPage(){

    const [years, setYears] = useState([])
    const token = process.env.REACT_APP_API_KEY; 


    // Api call for random show
    const fetchYears = async () => {
        try {
            const response = await axios.get(
                `http://phish.in/api/v1//years`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,

                    },
                }
            );
            setYears(response.data);
        } catch (err) {
            console.log(err);
        }
    };

      useEffect(() => {
        fetchYears([years]);
      }, []);

      console.log(years);


    return(
        <div className='container'>
            {console.log(years.data)}
            <p>{years.data[0]}</p>
            <p>{years.data[1]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>
            <p>{years.data[0]}</p>


        </div>
    )
}

export default YearPage;