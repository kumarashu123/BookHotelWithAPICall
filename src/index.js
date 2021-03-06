import React from 'react';

import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './reducers';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')    
);
registerServiceWorker();
