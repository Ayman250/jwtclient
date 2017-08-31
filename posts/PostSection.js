import React, {Component} from 'react';
import PostList from './PostList.js'
import PostForm from'./PostForm.js'

class PostSection extends Component{
    render(){
        if(this.props.activeHash !== undefined)
        {
            return (
                <div className="posts-container panel panel-default">
                    <div className="panel-body container">
                        <PostList {...this.props}/>
                        <PostForm {...this.props}/>
                    </div>
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
    posts: React.PropTypes.array.isRequired,
    activeHash: React.PropTypes.object.isRequired,
    addPost: React.PropTypes.func.isRequired
};

export default PostSection