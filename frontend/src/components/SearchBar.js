import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/SearchBar.css';

function SearchBar() {
    return (
        <div className="main">
            <div className="form-group has-search" style={{marginBottom: 0}}>
                <i className="fa fa-search form-control-feedback" aria-hidden="true"></i>
                <input type="text" className="form-control" placeholder="Search" />
            </div>
        </div>
    )
}

export default SearchBar;