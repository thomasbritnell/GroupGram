import { React, Component } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

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
            <div className="mt-5">
                <h2 className="text-light">HS's Albums</h2>
                <div className="row">
                    {this.state.albums.map(
                        ({ group, albumName, id }) =>
                            <div className="col-12 col-sm-6 col-md-4">
                                <h4><Link to={{ pathname: `/${albumName}/pictures` }}>{albumName}</Link></h4>
                                <p>{id}</p>
                            </div>
                    )}
                </div>
            </div >

        )
    }
}