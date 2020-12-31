import { React, Component } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import Picture from './Picture'
import SearchBar from './SearchBar';
import Breadcrumb from './Breadcrumb';

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
        axios.get(`/album/${this.props.match.params.id}/`).then(response => {
            this.setState({
                pictures: response.data.album[0].pictures,
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col align-self-start"><h1 className="text-light">FamGram</h1></div>
                    <div className="col align-self-end pb-3"><SearchBar /></div>
                </div>
                <Breadcrumb album={this.props.match.params.album}/>
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
            </div>
        )
    }
}