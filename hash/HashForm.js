import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HashForm extends Component{
    componentDidMount(){
        let hash = this.props.getCookie('activeHash');
        this.refs.hash.value = hash;
        this.props.updatePosts(hash)
    }
    onSubmit(e){
        e.preventDefault();
        const node = this.refs.hash;
        const hash = node.value;
        this.props.changeHash(hash);
        this.props.updatePosts(hash);
    }
    render(){
        let input;
        return(
            <div className="container">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <input
                            ref="hash"
                            type="text"
                            className="form-control"
                            placeholder="Add hash..." />
                    </div>
                </form>
            </div>
        )
    }
}

HashForm.PropTypes = {
    activeHash: PropTypes.object.isRequired,
    addHash: PropTypes.func.isRequired
};

export default HashForm