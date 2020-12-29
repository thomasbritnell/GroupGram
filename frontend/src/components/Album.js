import React from 'react';

const Album = props => {
    
    return (
        <div className="card">
            <img src={props.imageURL} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
            </div>
        </div>
    )
}

export default Album;