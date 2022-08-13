import React, { useState, useEffect } from 'react';


const [randomShow, setRandomShow] = useState([])

async function getBrewery(search) {
    let response = await axios.get(
        http://phish.in/api/v1/random-show
            );
