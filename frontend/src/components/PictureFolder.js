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
        axios.get(`/${this.props.match.params.album}/pictures/`).then(response => {
            console.log(response.data.album[0].pictures);
            this.setState({
                pictures: response.data.album[0].pictures,
            })
        })
    }

    render() {
        return (
            <div className="mt-5">
                <div className="row">
                    {this.state.pictures.map(
                        ({ location, imageURL, caption, album, user }) =>
                            <div className="col-12 col-sm-6 col-md-4">
                                <Picture
                                    place={location}
                                    url={imageURL}
                                    caption={caption}
                                    album={album}
                                    user={user}
                                />
                            </div>
                    )}
                </div>
            </div >
        )
    }
}