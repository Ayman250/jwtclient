import React, {Component} from 'react';
import './Register'
import {Redirect} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {shouldRedirect: this.props.isLoggedIn}
    }

    onSubmit(event) {
        event.preventDefault();
        let loginInfo = {
            username: this.refs.username.value,
            password: this.refs.password.value
        };
        this.props.onRegisterSubmit(loginInfo);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 text-center">
                        <div className="search-box">
                            <div className="caption">
                            </div>
                            <form onSubmit={this.onSubmit.bind(this)} method="post" className="loginForm">
                                <div className="input-group">
                                    <input type="text" id="name" ref="username" className="form-control"
                                           placeholder="Full Name"/>
                                    <input type="password" id="paw" ref="password" className="form-control"
                                           placeholder="Password"/>
                                    {this.props.isLoggedIn ?
                                        (<Redirect to={'/'}/>) : (
                                            <input type="submit" id="submit" className="form-control" value="Sign Up"/>)}

                                </div>
                                <div className="form-group">
                                    <br/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="aro-pswd_info">
                            <div id="pswd_info">
                                <h4>Password must be requirements</h4>
                                <ul>
                                    <li id="letter" className="invalid">At least <strong>one letter</strong></li>
                                    <li id="capital" className="invalid">At least <strong>one capital letter</strong>
                                    </li>
                                    <li id="number" className="invalid">At least <strong>one number</strong></li>
                                    <li id="length" className="invalid">Be at least <strong>8 characters</strong></li>
                                    <li id="space" className="invalid">be<strong> use
                                        [~,!,@,#,$,%,^,&,*,-,=,.,;,']</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register
