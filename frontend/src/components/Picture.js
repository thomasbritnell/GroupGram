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

            <div className="card">
                <img className="card-img-top" src={this.props.url} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            /*
            <div>
                    <h1>{this.props.place}</h1>
                    <img src={this.props.url}></img>
                </div>
            */
        )
    }
}

//set picture as only the template for showing the picture (the actual card)
//on the page where the picture needs to be shown, the above data can be passed 
//in as a prop on that page for each picture.