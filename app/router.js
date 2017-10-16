const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;


import Landing from './components/landing/landing';
import Register from './components/registration/register';
import Login from './components/login/login';

import {Route, IndexRoute} from 'react-router'
import {BrowserRouter,Switch} from 'react-router-dom';

class Routing extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Landing}/>

      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>


</Switch>
      </BrowserRouter>
    )
  }
}

export default Routing
