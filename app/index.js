
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import { createStore,applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import Routing from './router';







window.onload = () => {
    ReactDOM.render(
        <Routing/>, document.getElementById('app'));
};
