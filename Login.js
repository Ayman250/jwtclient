import React, {Component} from 'react';
import './Login.js'

class Login extends Component {



    onSubmit(event) {
        event.preventDefault();
        let loginInfo = {
            username: this.refs.username.value,
            password: this.refs.password.value
        };
        console.log(loginInfo);
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3030/login", true);
        xhttp.send(JSON.stringify(loginInfo));
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === xhttp.DONE) {
                console.log(xhttp.status);
                this.props.setCookie("jwt", xhttp.responseText, .1);
                console.log('');
                if (xhttp.status === 400) {
                    console.log("Invalid username and password");
                } else if (xhttp.status === 200) {

                }
            }
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)} method="post">
                <label><b>Username</b></label>
                <input type="text" ref="username" placeholder="Enter Username" name="username"/>
                <br/>
                <label><b>Password</b></label>
                <input type="password" ref="password" placeholder="Enter Password" name="password"/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Login;