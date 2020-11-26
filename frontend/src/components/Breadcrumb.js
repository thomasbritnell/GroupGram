import { React, Component } from 'react';

function Breadcrumb(){
    return(
        <div>
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent">
                <li class="breadcrumb-item"><a className="text-light" href="#">Home</a></li>
                <li class="breadcrumb-item"><a className="text-light" href="#">Orange</a></li>
                <li class="breadcrumb-item active" aria-current="page">Pictures</li>
            </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb;