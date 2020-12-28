import { React, Component } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import Album from './Album';

export default class AlbumFolder extends Component {

    constructor() {
        super();
        this.state = {
            albums: [],
        };
    }

    componentDidMount = () => {
        axios.get(`/${this.props.match.params.group}/albums/`).then(response => {
            console.log(response.data.albums);
            this.setState({
                albums: response.data.albums,
            })

        })
    }

    render() {
        console.log(this.state.albums.id);
        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid bg-transparent">
                    <div className="container">
                        <h1 className="display-4 text-light">{this.props.match.params.group}</h1>
                        <p className="lead text-light">Below are the albums for the group: {this.props.match.params.group}</p>
                    </div>
                </div>
                <div className="container row">
                    {this.state.albums.map(
                        ({ group, albumName, imageURL, id }) =>
                            <div className="col-12 col-sm-5 col-md-3 mx-1 my-2">
                                <Link className="text-dark text-center" to={{ pathname: `/${albumName}/pictures` }}>
                                    <Album name={albumName} imageURL={imageURL} />
                                </Link>
                            </div>
                    )}
                </div>
            </div >

        )
    }
}