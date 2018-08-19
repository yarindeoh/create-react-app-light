import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import 'resources/scss/style.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div>This is the App! yarind</div>
            </div>
        );
    }
}

export default hot(module)(App);
