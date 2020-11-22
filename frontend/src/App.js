import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Picture from './components/Picture'
import PictureFolder from './components/PictureFolder'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/:album/pictures/' component={PictureFolder} />

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