import React, {Component} from 'react';

class HashForm extends Component{
    onSubmit(e){
        e.preventDefault();
        const node = this.refs.Hash;
        const Hash = node.value;
        this.props.changeHash(Hash);
    }
    render(){
        let input;
        return(
            <div className="container">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <input
                            ref="Hash"
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
    activeHash: React.PropTypes.object.isRequired,
    addHash: React.PropTypes.func.isRequired
};

export default HashForm