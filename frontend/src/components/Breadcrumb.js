import { React, Component } from 'react';

function Breadcrumb() {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent">
                    <li className="breadcrumb-item"><a className="text-light" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-light" href="#">Orange</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Pictures</li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb;