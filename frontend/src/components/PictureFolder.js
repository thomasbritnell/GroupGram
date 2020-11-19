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
            // console.log(response)
            this.state.pictures = response.data.pictures;
            // console.log(response.data.pictures);
            this.setState({
                // location: response.data.pictures[1].location
                // pictures: response.date.pictures,
            })

        })
    }


    render() {
        return (
            <div>
                <div>
                    {this.state.pictures.map( 
                        ({location,imageURL}) => 
                        <div>
                            <Picture 
                                place={location}
                                url ={imageURL}                                
                            />
                        </div>
                    )}
                </div>
            </div >
                
        )
    }
}