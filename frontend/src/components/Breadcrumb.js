import { React, Component } from 'react';

function Breadcrumb(){
    return(
        <div>
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Orange</a></li>
                <li class="breadcrumb-item active" aria-current="page">Pictures</li>
            </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb;