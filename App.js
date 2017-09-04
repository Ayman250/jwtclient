import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './login/Login.js';
import Spinner from 'react-spinner';
import Register from "./login/Register";
import Chat from "./Chat";




class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: undefined,
            posts: [],
            activeHash: this.getCookie("activeHash")
        };
    }

    clearPosts(){
        this.setState(
            {posts: []}
        );
    }

    //retrieve new posts from server
    updatePosts(hash){
        this.clearPosts();
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:3030/getposts?hash=" + hash, true);
        console.log(this.state.activeHash);
        xhttp.setRequestHeader("Authorization", "Bearer " + this.getCookie("jwt"));
        xhttp.send();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === xhttp.DONE) {
                if (xhttp.status === 400) {
                    console.log("User already exists");
                } else if (xhttp.status === 200) {
                    this.insertPosts(JSON.parse(xhttp.responseText));
                }
            }
        }
    }

    //Insert posts clientSide
    insertPosts(newPosts) {
        if(newPosts === null) return;

        for (let i = 0; i<newPosts.length; i++) {
            let newPost = newPosts[i];
            console.log(newPost);
            let posts = this.state.posts;
            posts.push(newPost);
            this.setState({posts});
        }
    }

    onRegisterSubmit(loginInfo) {
        console.log(loginInfo);
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3030/register", true);
        xhttp.send(JSON.stringify(loginInfo));
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === xhttp.DONE) {
                console.log(xhttp.status);
                console.log('');
                if (xhttp.status === 400) {
                    console.log("User already exists");
                } else if (xhttp.status === 200) {
                    this.setCookie("jwt", xhttp.responseText, .1);
                    this.setState({isLoggedIn: true});
                    this.render();
                }

            }
        }
    }

    onLoginSubmit(loginInfo) {
        console.log(loginInfo);
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3030/login", true);
        xhttp.send(JSON.stringify(loginInfo));
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === xhttp.DONE) {
                console.log(xhttp.status);
                console.log('');
                if (xhttp.status === 400) {
                    console.log("Invalid username and password");
                } else if (xhttp.status === 200) {
                    this.setCookie("jwt", xhttp.responseText, 1);
                    this.setState({isLoggedIn: true});
                    this.render();
                }

            }
        }
    }

    componentDidMount(){
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:3030/userstatus", true);
        console.log("Bearer " + this.getCookie("jwt"));
        xhttp.setRequestHeader("Authorization", "Bearer " + this.getCookie("jwt"));
        xhttp.send();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === xhttp.DONE) {
                if (xhttp.status === 200) {
                    this.setState({isLoggedIn: true})
                }
                else{
                    this.setState({isLoggedIn: false})
                }
            }
        }
    }

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

    addPost(postBody){
        console.log(postBody);
        let {activeHash} = this.state;
        let xhttp = new XMLHttpRequest();
        let post = {body: postBody, hash: activeHash};
        xhttp.open("POST", "http://localhost:3030/addpost", true);
        xhttp.setRequestHeader("Authorization", "Bearer " + this.getCookie("jwt"));
        xhttp.send(JSON.stringify(post));
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === xhttp.DONE) {
                console.log(xhttp.status);
                console.log('');
                //pre-emptively Add Message for sake of flow...
               if (xhttp.status === 200) {
                }
                else if (xhttp.status === 400) {
                    console.log("Error Posting Message");
                }
            }
        }

    }

    changeHash(newHash){
        this.setState({activeHash: newHash});
        this.setCookie("activeHash", newHash, 0.5)
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

    auth(component){
        if(this.state.isLoggedIn === undefined){
            return (<Spinner/>);
        } else if(this.state.isLoggedIn){
            return component;
        }
        else{
            return (<Redirect to={'/login'}/>);
        }
    }

    render() {
        let RouterLogin =  (<Login isLoggedIn={this.state.isLoggedIn} onLoginSubmit={this.onLoginSubmit.bind(this)}/>);
        let RouterRegister = (<Register onRegisterSubmit={this.onRegisterSubmit.bind(this)}/>);
        return (
            <div>
                <div className="App-header App">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Beta</h2>
                </div>
                    <Router>
                        <switch>
                            <Route path="/login" render={() => (this.state.isLoggedIn === true ? <Redirect to={'/'}/> : RouterLogin)}/>
                            <Route path="/Register" render={() => (this.state.isLoggedIn === true ? <Redirect to={'/'}/> : RouterRegister)}/>
                            <Route exact={true} path="/" render={() => this.auth(<Chat {...this.state} addPost={this.addPost.bind(this)}
                                   getCookie={this.getCookie.bind(this)} changeHash={this.changeHash.bind(this)}
                                   updatePosts={this.updatePosts.bind(this)}/>)}/>
                            <Route path="/test" render={() => this.auth(<button type="button" onClick={this.test.bind(this)}>Test!</button>)}/>
                        </switch>
                    </Router>
                <br/>

            </div>
        );
    }
}

export default App;
