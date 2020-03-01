import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import { connectRouter } from 'connected-react-router';

const createRootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        i18n: i18nReducer
    });
export default createRootReducer;
