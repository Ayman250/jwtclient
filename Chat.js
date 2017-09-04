import React, {Component} from 'react';
import './Chat'
import HashForm from "./hash/HashForm";
import PostSection from "./posts/PostSection";
import PropTypes from 'prop-types';

class Chat extends Component{

    componentDidMount(){}

    render(){
        return(
            <div>
                <HashForm {...this.props}/>
                <PostSection {...this.props}/>
            </div>
        );
    }
}

Chat.PropType = {
    updatePosts: PropTypes.func.isRequired,
    activeHash: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    addPost: PropTypes.func.isRequired
}

export default Chat
