import { React, Component } from 'react';
import axios from 'axios';
import Picture from './Picture'


export default class PictureFolder extends Component {

    constructor() {
        super();
        this.state = {
            picture: "",
            location: "",
        };
    }

    componentDidMount = () => {
        axios.get("/pictures").then(response => {
            console.log(response)

            this.setState({
                location: response.data.pictures[1].location
            })

        })
    }


    render() {
        return (
            <div>
                <Picture picture={this.state} />
            </div >
        )
    }
}