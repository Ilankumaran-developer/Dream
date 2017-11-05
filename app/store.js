import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore,applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';



 class Store extends Reacct.Component{

  constructor(props){
        super(props)
        this.state = {
            loaded : false,
            user:{}
        }
    }

    getStore(){
    const storewithmiddleware = applyMiddleware(reduxThuk)(createStore);
    return storewithmiddleware(reducers,{
      user:{
        sttae:this.state.user
      }
    })

    }


  render(){
    return({this.getStore()})
  }
}


exports default Store;
