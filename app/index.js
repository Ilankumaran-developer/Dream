
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


import Routing from './router';




window.onload = () => {
    ReactDOM.render(
        <Routing/>, document.getElementById('app'));
};
