import React from 'react';
import NavigationMenu from '../common/navigation';
import { API } from '../api'
import Button from 'react-bootstrap-button-loader';

class Login extends React.Component{


  constructor(props)  {
    super(props);
    this.state={
      email:"",
      password:"",
      loading:false,
      status:"",
      user:{

      }
    }

  }
  changeState(e){
    this.setState({[e.target.name]:e.target.value});
  }
  login(){
    this.setState({loading:true,status:"Logging In..."})
    var data = {};
    data.email = this.state.email;
    data.password = this.state.password;
      API.post('/signin',data).then(response=>{
          if(response.data.status == 1)
          {
            const location = {
               pathname: '/dashboard',
               state: this.state
           }
            console.log(response.data)
            setTimeout(function(){
                this.setState({loading:false,status:"Logged In successfully",user:response.data.data[0]});
                this.props.history.push(location);
            }.bind(this),1000)

          }
      }).catch(err=>{

      })
  }
  render(){
  return(
    <div>
    <NavigationMenu/>
    <div className="container signinn">
      <div className="row">

          <div className="col-sm-6 col-md-4 col-md-offset-4">
              <h1 className="text-center login-title">Sign in to continue to Tra Well</h1>
              <div className="account-wall">
                  <img className="profile-img" src={"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"}
                      alt=""/>
                      <span><center>{this.state.status}</center></span>

                  <form className="form-signin">
                  <input type="email" name="email"  className="form-control" placeholder="Email" onChange={this.changeState.bind(this)} required autoFocus/>
                  <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.changeState.bind(this)} required/>
                  <Button loading={this.state.loading} className="btn btn-lg btn-primary btn-block" type="button" onClick={this.login.bind(this)}>
                      Sign in</Button>
                  <label className="checkbox pull-left"/>
                      <input type="checkbox" value="remember-me"/>
                      Remember me

                  <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                  </form>
              </div>
              <a href="/register" className="text-center new-account">Create an account </a>
          </div>
      </div>
  </div>
  </div>

  )
}

}


export default Login;
