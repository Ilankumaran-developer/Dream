import React from 'react';

import NavigationMenu from '../common/navigation';
class Register extends React.Component{
componentWillMount() {

}

render(){
return (
  <div>
  <NavigationMenu/>
  <div className="container signinn">
    <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">Sign up to continue to Tra Well</h1>
            <div className="account-wall">
                <img className="profile-img" src={"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"}
                    alt=""/>
                <form className="form-signin">
                <div className="row">
                <input type="text" className="form-control form-group" placeholder="First name" required autoFocus/>
                </div>
                <div className="row">
                <input type="text" className="form-control form-group" placeholder="Last name" required />
                </div>
                <div className="row">
                <input type="text" className="form-control form-group" placeholder="Email" required />
                </div>
                <div className="row">
                <input type="password" className="form-control form-group" placeholder="Password" required/>
                </div>
                <div className="row">
                <input type="password" className="form-control form-group" placeholder="Confirm Password" required/>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Sign up</button>
                <label className="checkbox pull-left"/>
                    <input type="checkbox" value="remember-me"/>
                    Remember me

                <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                </form>
            </div>

        </div>
    </div>
</div>
</div>


)
}
}
export default Register
