import React, {Component} from 'react';
import './Login.js'
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom'

class Login extends Component {

    constructor(props){
       super(props);
       this.state = {shouldRedirect:this.props.isLoggedIn}
    }

    onSubmit(event){
        event.preventDefault();
        let loginInfo = {
            username: this.refs.username.value,
            password: this.refs.password.value
        };
        this.props.onLoginSubmit(loginInfo);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} method="post">
                    <label><b>Username  </b></label>
                    <input type="text" ref="username" placeholder="Enter Username" name="username"/>
                    <br/>
                    <label><b>Password  </b></label>
                    <input type="password" ref="password" placeholder="Enter Password" name="password"/>
                    <br/>
                    {this.props.isLoggedIn ?
                        (<Redirect to={'/'}/>) : (<input type="submit" value="Login"/>)}
                </form>
                <br/>
                <p>Don't have an account?  <Link to={"/register"}>Click Here To Register!</Link> </p>
            </div>
        );
    }
}

export default Login;