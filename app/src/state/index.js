import { createStore, compose, applyMiddleware } from 'redux';
// import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import devTools from 'remote-redux-devtools';
import createReducer from './reducers';
import sagas from '../sagas';
import Settings from '../settings';
import { autoRehydrate } from 'redux-persist'

const settings = Settings.load();

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(sagaMiddleware),
     autoRehydrate()
  ];

  if (__DEV__) {
    enhancers.push(devTools());
  }

  const store = createStore(createReducer(), initialState, compose(...enhancers));

  sagas.forEach(saga => sagaMiddleware.run(saga));

  return store;
}

module.exports = configureStore;
