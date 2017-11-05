    const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;


import Landing from './components/landing/landing';
import Register from './components/registration/register';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import ErrorBoundary from './components/error';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import {Route, IndexRoute} from 'react-router'
import {BrowserRouter,Switch} from 'react-router-dom';

class Routing extends React.Component{
  constructor(props){
        super(props)
        this.state = {
            loaded : false,
            user:{}
        }
    }
    getStoreProvider(){
      const initialState = {
  todos: [{id:123, text:'hello', completed: false}]
};
  //      const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
        return createStore(reducers);
    }
  render(){
    return(


      <div>
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Landing}/>

      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={Dashboard}/>


</Switch>
      </BrowserRouter>
      </div>



    )
  }
}

export default Routing
