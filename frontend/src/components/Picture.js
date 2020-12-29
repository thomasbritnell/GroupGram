import { React, Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';


export default class Picture extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (

            <div className="card border border-dark mt-3">
                <img className="card-img-top polaroid" src={this.props.url} alt="Card image cap" />
                <div className="card-body">
                    <Avatar src="/broken-image.jpg" />
                    <p className="card-text">{this.props.caption}</p>
                    <p>{this.props.album}</p>
                    <p>{this.props.user}</p>
                </div>
            </div >

        )
    }
}

//set picture as only the template for showing the picture (the actual card)
//on the page where the picture needs to be shown, the above data can be passed 
//in as a prop on that page for each picture.