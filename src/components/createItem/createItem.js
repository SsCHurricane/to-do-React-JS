import React, { Component} from 'react';

import './createItem.scss';

export default class createItem extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
            e.preventDefault();
            this.props.addItem('', 'add', this.state.label);
            this.setState({label: ''});
    };

    render() {
        return (
            <div className="create">
                <div className="container">
                    <form className="create__form" onSubmit={this.onSubmit}>
                        <input type="text"
                            value={this.state.label}
                            className="create__input" 
                            placeholder="Enter List"
                            onChange={this.onLabelChange}>
                        </input>
                        <button className="create__btn">Add List</button>
                    </form>
                    
                </div>
            </div>
        );
    }
}