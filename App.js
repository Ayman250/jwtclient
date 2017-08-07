import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
    setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


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
                this.setCookie("jwt", xhttp.responseText, .1);
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

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>MY C()()L SITE</h2>
                </div>
                <Login/>
            </div>
        );
    }
}

export default App;
