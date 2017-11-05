import React from 'react';
import Validation from 'react-validation';
import { API } from '../api'
import { ToastContainer,ToastMessage } from "react-toastr";
import ReactToastr  from 'react-toastr';

import Button from 'react-bootstrap-button-loader';

import NavigationMenu from '../common/navigation';
class Register extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      ToastMessageFactory : React.createFactory(ToastMessage.animation),
      loading:false

    }

  }
componentWillMount() {

}
changeState(e){
  this.setState({[e.target.name]:e.target.value});

}
register(){
this.setState({loading:true})

  let data = {};
  data['first_name'] = this.state.first_name;
  data['last_name'] = this.state.last_name;
  data['email'] = this.state.email;
  data['password'] = this.state.password;
  //data = querystring.stringify(JSON.stringify(data));

  API.post('/signup',data).then(response=>{

      if(response.data.status == 1)
      {
        const location = {
           pathname: '/login',
           state: {}
       }
       this.refs.cont.success('registered successfully...log in to continue');
       setTimeout(()=>{
          this.props.history.push(location);
       },5000);

      }
        else{
console.log(response.data)
        this.refs.cont.error(response.data.response,'Error', {
                timeOut: 10000,
                extendedTimeOut: 10000




            });
            this.setState({loading:false})
      }
  }).catch(err=>{
    console.log(err);
  })

}

render(){
return (
  <div>
  <NavigationMenu/>

  <div className="container signinn">
  <ToastContainer
   ref="cont"
    className="toast-bottom-full-width"
  />
    <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">Sign up to continue to Tra Well</h1>
            <div className="account-wall">
                <img className="profile-img" src={"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"}
                    alt=""/>

                <form className="form-signin"  method="POST">

                <div className="row">
                <input   type="text" name="first_name" onChange={this.changeState.bind(this)} className="form-control form-group" placeholder="First name"    required autoFocus/>
                </div>
                <div className="row">
                <input type="text" name="last_name" onChange={this.changeState.bind(this)} className="form-control form-group" placeholder="Last name" required />
                </div>
                <div className="row">
                <input type="text" name="email" onChange={this.changeState.bind(this)} className="form-control form-group" placeholder="Email" required />
                </div>
                <div className="row">
                <input type="password" name="password" onChange={this.changeState.bind(this)} className="form-control form-group" placeholder="Password" required/>
                </div>
                <div className="row">
                <input type="password" name="cpassword" className="form-control form-group" placeholder="Confirm Password" required/>
                </div>
                <Button loading={this.state.loading} className="btn btn-lg btn-primary btn-block" type="button" onClick={this.register.bind(this)}>
                    Sign up</Button>
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
