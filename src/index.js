import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { syncTranslationWithStore } from 'react-redux-i18n';

import reducers from './services/rootReducer';
import rootSaga from './services/rootSaga';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
);

const rootSagaTask = sagaMiddleware.run(rootSaga);
syncTranslationWithStore(store);

rootSagaTask.done.catch(function(err) {
    console.log(err);
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
