import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
    createCookie(name,value,days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    readCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
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
                console.log(xhttp.responseText);
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
                    <h2>Welcome to React</h2>
                </div>
                <Login/>
            </div>
        );
    }
}

export default App;
