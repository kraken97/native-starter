import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './state';
import { persistStore } from 'redux-persist'
import { AsyncStorage } from 'react-native'

const store = configureStore();
export const persistor=persistStore(store, { storage: AsyncStorage }, (e) => {
  console.log("restored", e);

})

function setup() {
  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

module.exports = setup;
