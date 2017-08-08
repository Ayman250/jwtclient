import React, {Component} from 'react';
var Router = require('react-router-dom');
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './Login.js'




class App extends Component {

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

    test(){
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:3030/tester", true);
        console.log("Bearer " + this.getCookie("jwt"));
        xhttp.setRequestHeader("Authorization", "Bearer " + this.getCookie("jwt"));
        xhttp.send();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === xhttp.DONE) {
                console.log(xhttp.responseText);
            }
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>MY C()()L SITE</h2>
                </div>
                <Router>
                    <Route path="/" component={Login}/>
                </Router>
                {/*<Login setCookie={this.setCookie.bind(this)} getCookie={this.getCookie.bind(this)}/>*/}
                <br/>
                <button type="button" onClick={this.test.bind(this)}>Test!</button>
            </div>
        );
    }
}

export default App;
