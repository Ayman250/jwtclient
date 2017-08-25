import React, {Component} from 'react';
import PostList from './PostList.js'
import PostForm from'./PostForm.js'

class PostSection extends Component{
    render(){
        let {activeHash} = this.props;
        return (
            <div className="posts-container panel panel-default">
                <div className="panel-heading"><strong>{activeHash || 'Enter a HashTag'}</strong></div>
                <div className="'panel-body posts">
                    <PostList {...this.props}/>
                    <PostForm {...this.props}/>
                </div>
            </div>

        )
    }
}

PostSection.propTypes = {
    posts: React.PropTypes.array.isRequired,
    activeHash: React.PropTypes.object.isRequired,
    addPost: React.PropTypes.func.isRequired
};

export default PostSection