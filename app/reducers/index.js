import {combineReducers} from 'redux';
import  app from './app';

import {reducer as formReducer} from 'redux-form';

const todoApp = combineReducers({
    app,

    form: formReducer

});

export default todoApp;
