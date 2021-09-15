import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import Appbar from './components/Appbar/Appbar';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Provider store={store}>
        <Appbar />
        <Route exact path='/' component={Home} />
        {/* <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} /> */}
      </Provider>
    );
  }
}
