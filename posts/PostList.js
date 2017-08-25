import React, {Component} from 'react';
import Post from './Post';

class PostList extends Component{
    render(){
        return(
            <ul>{
                this.props.posts.map( post =>{
                    return (
                        <Post key={post.id} post={post} />
                    )
                })
            }</ul>
        )
    }
}

PostList.PropTypes = {
    posts: React.PropTypes.PropTypes.array.isRequired
};

export default PostList