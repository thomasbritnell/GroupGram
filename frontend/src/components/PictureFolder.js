import { React, Component } from 'react';
import axios from 'axios';
import Picture from './Picture'


export default class PictureFolder extends Component {

    constructor() {
        super();
        this.state = {
            picture: "",
            location: "",
            pictures: [],
        };
    }

    componentDidMount = () => {
        axios.get("/pictures").then(response => {

            //console.log(response.data.pictures);
            this.setState({
                pictures: response.data.pictures,
            })

        })
    }


    render() {
        return (
            <div className="container">

                <div className="row">
                    {this.state.pictures.map(
                        ({ location, imageURL, caption }) =>
                            <div className="col-4">
                                <Picture
                                    place={location}
                                    url={imageURL}
                                    caption={caption}
                                />
                            </div>
                    )}
                </div>
            </div >

        )
    }
}