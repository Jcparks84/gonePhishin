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
            {console.log();}
                <p>2022</p>
                <p>2021</p>
                <p>2020</p>
        </div>
    )
}

export default YearPage;