import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { syncTranslationWithStore } from 'react-redux-i18n';

import reducers from './services/rootReducer';
import rootSaga from './services/rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
);

const rootSagaTask = sagaMiddleware.run(rootSaga);
syncTranslationWithStore(store);

rootSagaTask.done.catch(function(err) {
    console.log(err);
});

export default store;
