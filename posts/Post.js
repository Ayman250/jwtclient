import React, {Component} from 'react';
import fecha from 'fecha';

class Posts extends Component{

    render(){
        let post = this.props.post;
        let createdAt = fecha.format(new Date(post.createdAt), 'HH:mm:ss MM/DD/YY');
        return(
            <li>
                <div className="Author">
                    <strong>{post.author + " "}</strong>
                    <i className="timeStamp">{createdAt}</i>
                </div>
                <div className="body">{post.body}</div>
            </li>
        )
    }
}

Posts.PropTypes = {
    post: React.PropTypes.object.isRequired
};

export default Posts