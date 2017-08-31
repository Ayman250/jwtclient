import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Chat'
import HashForm from "./hash/HashForm";
import PostSection from "./posts/PostSection";

class Chat extends Component{
    render(){
        return(
            <div>
                <HashForm {...this.props}/>
                <PostSection {...this.props}/>
            </div>
        );
    }
}

export default Chat
