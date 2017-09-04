import React, {Component} from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

class PostList extends Component{
    render(){
        return(
            <ul className="list-group">{
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
    posts: PropTypes.PropTypes.array.isRequired
};

export default PostList