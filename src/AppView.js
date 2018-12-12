import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { I18n } from 'react-redux-i18n';

import 'resources/scss/style.scss';
import Loader from './common/components/Loader';

class AppView extends Component {
    render() {
        return (
            <div className="app">
                <div className="title">{I18n.t('app.title')}</div>
                <div className="section">
                    <Loader />
                </div>
                <p>@ powered by yarindeoh</p>
            </div>
        );
    }
}

export default hot(module)(AppView);
