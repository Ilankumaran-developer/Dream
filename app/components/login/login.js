import React from 'react';
import NavigationMenu from '../common/navigation';

class Login extends React.Component{

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
                  <form className="form-signin">
                  <input type="text" className="form-control" placeholder="Email" required autoFocus/>
                  <input type="password" className="form-control" placeholder="Password" required/>
                  <button className="btn btn-lg btn-primary btn-block" type="submit">
                      Sign in</button>
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
