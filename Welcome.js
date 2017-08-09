import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Welcome'

class Welcome extends Component{
    render(){
        return(
            <div>
                <h2>
                    WELCOME!
                </h2>
                <Link to={"/login"}>Login Page</Link>
                <Link to={"/test"}>Test Page</Link>
            </div>
        );
    }
}

export default Welcome
