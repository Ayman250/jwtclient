import React, {Component} from 'react';
import './Register'
import {Redirect} from 'react-router-dom';

class Register extends Component{
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
        this.props.onRegisterSubmit(loginInfo);
    }
    render(){
        return(
            <div>
                <h2>
                    Register!
                </h2>
                <form onSubmit={this.onSubmit.bind(this)} method="post">
                    <label><b>Username</b></label>
                    <input type="text" ref="username" placeholder="Enter Username" name="username"/>
                    <br/>
                    <label><b>Password</b></label>
                    <input type="password" ref="password" placeholder="Enter Password" name="password"/>
                    <br/>
                    {this.state.shouldRedirect ?
                        (<Redirect to={'/'}/>) : (<input type="submit" value="Login"/>)}
                </form>
            </div>
        );
    }
}

export default Register
