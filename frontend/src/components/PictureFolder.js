import { React, Component } from 'react';
import { useParams } from "react-router-dom"
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
        axios.get(`/${this.props.match.params.album}/pictures/`).then(response => {
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
                        ({ location, imageURL, caption, album }) =>
                            <div className="col-4">
                                <Picture
                                    place={location}
                                    url={imageURL}
                                    caption={caption}
                                    album={album}
                                />
                            </div>
                    )}
                </div>
            </div >

        )
    }
}