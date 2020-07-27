import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette : {
    primary : {
      main : '#3f51b5',
      light : '#6573c3',
      dark : '#2c387e'
    },
    secondary : {
      main : '#ff1744',
      light : '#f6685e',
      dark : '#aa2e25'
    }
  },
});

class App extends Component {
  
  render() {
    console.log(theme);
    return (
      <div className="App">
        <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Navigation />
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
