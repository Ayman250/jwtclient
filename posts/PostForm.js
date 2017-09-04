import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PostForm extends Component{
    onSubmit(e){
        e.preventDefault();
        const node = this.refs.post;
        const post = node.value;
        this.props.addPost(post, this.props.activeHash);
        node.value='';
    }
    render(){
        let input;
        //only show input form if there is a channel selected
        // if(this.props.activeHash !== undefined){
            input = (
                <input
                    ref="post"
                    type="text"
                    className="form-control"
                    placeholder="Add Post..." />
            )
        // }
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    {input}
                </div>
            </form>
        )
    }
}

PostForm.PropTypes = {
    activeHash: PropTypes.object.isRequired,
    addPost: PropTypes.func.isRequired
};

export default PostForm