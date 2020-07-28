import React, { Component } from 'react';
import Navigation from './containers/Navigation/Navigation';
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
    return (
      <React.Fragment>
        <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Navigation />
          </MuiThemeProvider>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
