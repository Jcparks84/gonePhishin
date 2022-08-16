import React from 'react'


function YearPage(){
    return(
        <div ="dropdown show">
            <a ="btn btn-secondary dropdown-toggle" href="#" role="button" id="actions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Action
            </a>
        <div ="dropdown-menu" aria-labelledby="actions">
            <a ="dropdown-item" href="#">Add</a>
            <a ="dropdown-item" href="#">Edit</a>
            <a ="dropdown-item" href="#">Delete</a>
        </div>
    </div>
    )
}

export default YearPage;