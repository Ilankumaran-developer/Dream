
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Register from './register.jsx';

//import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import {blue500} from 'material-ui/styles/colors';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();

//todo: useragent is hardcoded temporariy, user routerContext to get instead or state props


window.onload = () => {
    ReactDOM.render(
        <Register/>, document.getElementById('app'));
};
