import React from 'react'


function YearPage(){
    return(
        <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="actions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Action
            </a>
        <div class="dropdown-menu" aria-labelledby="actions">
            <a class="dropdown-item" href="#">Add</a>
            <a class="dropdown-item" href="#">Edit</a>
            <a class="dropdown-item" href="#">Delete</a>
        </div>
    </div>
    )
}

export default YearPage