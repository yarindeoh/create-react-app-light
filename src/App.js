import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import HomePageView from 'containers/HomePageView';
import 'resources/scss/style.scss';

export const App = withRouter(() => {
    return (
        <Switch>
            <Route path="/" exact={true} component={HomePageView} />
        </Switch>
    );
});
