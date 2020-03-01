import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { syncTranslationWithStore } from 'react-redux-i18n';
import { ConnectedRouter } from 'connected-react-router';

import createRootReducer from 'services/rootReducer';
import rootSaga from 'services/rootSagas';
import { App } from './App';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);
syncTranslationWithStore(store);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
