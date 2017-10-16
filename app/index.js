
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Register from './register.jsx';
import NavigationMenu from './navigation.jsx';




window.onload = () => {
    ReactDOM.render(
        <NavigationMenu/>, document.getElementById('app'));
};
