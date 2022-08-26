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
            <p>{years.data[30]}</p>
            <p>{years.data[29]}</p>
            <p>{years.data[28]}</p>
            <p>{years.data[27]}</p>
            <p>{years.data[26]}</p>
            <p>{years.data[25]}</p>
            <p>{years.data[24]}</p>
            <p>{years.data[23]}</p>
            <p>{years.data[22]}</p>
            <p>{years.data[9]}</p>
            <p>{years.data[10]}</p>
            <p>{years.data[11]}</p>
            <p>{years.data[12]}</p>
            <p>{years.data[13]}</p>
            <p>{years.data[14]}</p>
            <p>{years.data[15]}</p>
            <p>{years.data[16]}</p>
            <p>{years.data[17]}</p>
            <p>{years.data[18]}</p>
            <p>{years.data[19]}</p>
            <p>{years.data[20]}</p>
            <p>{years.data[21]}</p>
            <p>{years.data[22]}</p>
            <p>{years.data[23]}</p>
            <p>{years.data[24]}</p>
            <p>{years.data[25]}</p>
            <p>{years.data[26]}</p>
            <p>{years.data[27]}</p>
            <p>{years.data[28]}</p>
            <p>{years.data[29]}</p>
            <p>{years.data[30]}</p>



        </div>
    )
}

export default YearPage;