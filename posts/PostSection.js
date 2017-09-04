import React, {Component} from 'react';
import PostList from './PostList.js'
import PostForm from'./PostForm.js'
import PropTypes from 'prop-types';

class PostSection extends Component{
    render(){
        if(this.props.activeHash.length !== 0)
        {
            return (
                <div className="container">
                        <PostList {...this.props}/>
                        <PostForm {...this.props}/>
                </div>

            )
        } else {
            return (
                <div>
                    <h2>Enter a Hash</h2>
                </div>
            )
        }
    }
}

PostSection.propTypes = {
    posts: PropTypes.array.isRequired,
    activeHash: PropTypes.string.isRequired,
    addPost: PropTypes.func.isRequired
};

export default PostSection