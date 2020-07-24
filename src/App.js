import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
