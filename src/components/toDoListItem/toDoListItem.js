import React from 'react';

import './toDoListItem.scss'

const ListItem = ({label, important, done, onImportant, onDone, onDelete}) => {

    let name = important ? "list__label list__label--important" : "list__label";
    name += done ? " list__label--done" : "";
    
    return (
        <div className="list__item-elem">
            <span className={name}
                onClick={ () => onDone( 'done' ) }>
                {label}
            </span>

            <div className="list__menu">
                <button className="list__menu-btn list__menu-btn--green"
                        onClick={ () => onDelete( 'delete' ) } >
                    <i className="fa fa-trash-o"></i>
                </button>
                <button className="list__menu-btn list__menu-btn--red"
                        onClick={ () => onImportant( 'important') }>
                    <i className="fa fa-exclamation"></i>
                </button>
            </div>
        </div>
    );
};

export default ListItem;