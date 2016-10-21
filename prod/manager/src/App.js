import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDckqgd5eWKT0eDJwfnOlnYm8inznzDtrY',
      authDomain: 'manager-6e9a0.firebaseapp.com',
      databaseURL: 'https://manager-6e9a0.firebaseio.com',
      storageBucket: 'manager-6e9a0.appspot.com',
      messagingSenderId: '1077092687522'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default App;
