import React, {Component} from 'react';
import fecha from 'fecha';
import PropTypes from 'prop-types';

class Posts extends Component{

    render(){
        let post = this.props.post;
        let createdAt = fecha.format(new Date(post.createdAt), 'HH:mm:ss MM/DD/YY');
        return(
            <li className="list-group-item">
                <div>
                    <strong>{post.author + " "}</strong>
                    <i>{createdAt}</i>
                </div>
                    <div>{post.body}</div>
            </li>
        )
    }
}

Posts.PropTypes = {
    post: PropTypes.object.isRequired
};

export default Posts