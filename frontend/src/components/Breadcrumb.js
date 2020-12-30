import { React, Component } from 'react';

export default class Breadcrumb extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent">
                        <li className="breadcrumb-item"><a className="text-light" href="#">Home</a></li>
                        <li className="breadcrumb-item"><a className="text-light" href="#">{this.props.album}</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Pictures</li>
                    </ol>
                </nav>
            </div>
        )
    }
}

