import { React, Component } from 'react';
import { useParams } from "react-router-dom";
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
        return (
            <div className="mt-5">

                <div className="row">
                    {this.state.albums.map(
                        ({ group, albumName }) =>
                            <div className="col-12 col-sm-6 col-md-4">
                                <h2>{group}'s Albums</h2>
                                <h4>{albumName}</h4>
                            </div>
                    )}
                </div>
            </div >

        )
    }
}