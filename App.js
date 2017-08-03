import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
    render() {
        return (
            <form action="http://localhost:3030/login" method="post">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username"/>
                <br/>
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password"/>
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
