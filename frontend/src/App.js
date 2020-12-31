import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Picture from './components/Picture'
import PictureFolder from './components/PictureFolder'
import AlbumFolder from './components/AlbumFolder'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    const App = () => (
      <div className="container">

        {/* <h1 className="text-light mt-5">FamGram</h1> */}
        {/* <Breadcrumb /> */}

        <Switch>
          <Route exact path='/album/:id/' name="pictures" component={PictureFolder} />
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