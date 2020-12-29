import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Picture from './components/Picture'
import PictureFolder from './components/PictureFolder'
import AlbumFolder from './components/AlbumFolder'
import Breadcrumb from './components/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    const App = () => (
      <div className="container">
        <div className="row mt-5">
          <div className="col align-self-start"><h1 className="text-light">FamGram</h1></div>
          <div className="col align-self-end pb-3"><SearchBar /></div>
        </div>
        <Breadcrumb />
        <Switch>
          <Route exact path='/:album/pictures/' name="pictures" component={PictureFolder} />
          <Route exact path='/:group/albums/' component={AlbumFolder} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;

/*
function App() {
  return (
    <div className="background">
      <PictureFolder />
    </div>
  );
}

export default App;
*/