import React, { useState, useEffect } from 'react';


const Requests = (props) =>



const [randomShow, setRandomShow] = useState([])


async function getBrewery(search) {
    let response = await axios.get(
        `https://api.openbrewerydb.org/breweries/search?query=${search}`
    );