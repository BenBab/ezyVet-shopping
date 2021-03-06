import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
// import * as serviceWorker from './serviceWorker';
import { SnackbarProvider } from 'notistack';

import { createStore, applyMiddleware } from 'redux';
import { loadStoreFront } from './store/actions';
import rootReducer from './store/reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas'

import { BrowserRouter } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools( 
    applyMiddleware(sagaMiddleware)) 
);

sagaMiddleware.run(rootSaga);

store.dispatch(loadStoreFront());

render(
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
