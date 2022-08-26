import React from 'react'
import './yearPage.css'


function YearPage(){

    const [years, setYears] = useState([])

    // Api call for random show
    const fetchRandomShow = async () => {
        try {
            const response = await axios.get(
                `http://phish.in/api/v1/random-show`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,

                    },
                }
            );
            setRandomShow(response.data.data.tracks.mp3);
        } catch (err) {
            console.log(err);
        }
    };

      useEffect(() => {
        fetchRandomShow([randomShow]);
      }, []);


    return(
        <div className='container'>
                <p>2022</p>
                <p>2021</p>
                <p>2020</p>
        </div>
    )
}

export default YearPage;