import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import updateState from './reducers/index';

import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(updateState, composeEnhancers(applyMiddleware(sagaMiddleware)));

import sagas from './sagas';

sagaMiddleware.run(sagas);

require('./styles/main.scss');

import * as ActionCreators from './action-creators'
store.dispatch(ActionCreators.startFetchUserProfile('mattnedrich'));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
