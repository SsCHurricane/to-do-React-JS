import React from 'react';

import ToDoListItem from '../toDoListItem';
import './toDoList.scss';

const ToDoList = ({ todos, importantChange, doneChange, deleteItem }) => {
    const element = todos.map((item) => {
        const {id, ...todoItem} = item;

        return (
                <li key={id} className="list__item">
                     <ToDoListItem {...todoItem} 
                     onImportant={(prop) => importantChange(id, prop) } 
                     onDone={(prop) => doneChange(id, prop) } 
                     onDelete={(prop) => deleteItem(id, prop) } />
                </li>
        );
    });

    return(
        <div className="list">
            <div className="container">
                <ul className="list__elements">
                    { element }
                </ul>
            </div>
        </div>
       
    );
};

export default ToDoList;