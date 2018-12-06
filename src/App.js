import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { I18n } from 'react-redux-i18n';

import 'resources/scss/style.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div>This is the App!</div>
                {I18n.t('app.test')}
            </div>
        );
    }
}

export default hot(module)(App);
