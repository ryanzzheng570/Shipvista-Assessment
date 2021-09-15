import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import Appbar from './components/Appbar/Appbar';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Appbar />
          <Route exact path='/' component={Home} />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
