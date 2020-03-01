import React from 'react';
import { I18n } from 'react-redux-i18n';

import Loader from 'components/Loader';

const HomePageView = props => {
    return (
        <div className="app">
            <div className="title">{I18n.t('app.title')}</div>
            <div className="section">
                <Loader />
            </div>
            <p>@ powered by yarindeoh</p>
        </div>
    );
};

export default HomePageView;
