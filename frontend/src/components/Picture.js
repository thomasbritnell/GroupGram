import { React, Component } from 'react';
import axios from 'axios';


export default class Picture extends Component {
    constructor() {
        super();
        this.state = {
            caption: "",
            uploader: "",
            date: "",
            location: "",
        };
    }
    /*
        componentDidMount = () => {
            axios.get("/pictures").then(response => {
                console.log(response)
    
                for (let i = 0; i < 10; i++) {
                    console.log(response.data.pictures[i].location)
                }
    
            })
        }
    */
    render() {
        return (
            <h1>{this.props.picture.location}</h1>
        )
    }
}

//set picture as only the template for showing the picture (the actual card)
//on the page where the picture needs to be shown, the above data can be passed 
//in as a prop on that page for each picture.