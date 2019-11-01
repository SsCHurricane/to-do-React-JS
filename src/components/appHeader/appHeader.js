import React from 'react';
import './appHeader.scss';

const AppHeader = ( {done, rest} ) => {
    return(
        <div className='header'>
            <div className="container">
                <div className="header__inner">
                    <div className="header__title">
                        <h1>My ToDo List</h1>
                    </div>
                    <div className="header__status">
                        <p>{rest} more to do, {done} done</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppHeader;