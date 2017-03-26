import * as React from 'react';
import * as ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import updateState from './reducers/index';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(updateState, composeEnhancers(applyMiddleware(thunk)));

ReactDom.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app')
);
