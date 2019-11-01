import React, { Component } from 'react';
import './serchPanel.scss';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    onSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {

        const buttons = this.buttons.map(({ name, label }) => {

            const isActive = this.props.active === name;
            const clsName = isActive ? "search__btn search__btn--active" : "search__btn";

            return(
                <button className = { clsName }
                        key={name}
                        onClick={ () => this.props.onFilterChange(name)} >
                    {label}
                </button>
            );
        });

        return(
            <div className="search">
                <div className="container">
                    <div className="search__inner">
                        <input type="text"
                            placeholder="search"  
                            className="search__input"
                            value={ this.state.term }
                            onChange={ this.onSearch } />
    
                        <div className="search__menu">
                            { buttons }
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}