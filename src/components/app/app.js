import React, { Component } from 'react';

import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import ToDoList from '../toDoList';
import CreateItem from '../createItem';
import './app.scss';

export default class App extends Component {

    id = 0;

    state = {
        toDoData: [
            this.createData('Drink Coffee!'),
            this.createData('Make Awesome App'),
            this.createData('Have a Lunch'),
            this.createData('Listen some Rock !--!') 
        ],
        term: '',
        active: 'all'
    };

    createData(label) {
        return {
            label,
            important: false,
            done: false,
            id: ++this.id
        };
    }

    changeData = (id = this.id + 1, prop = '', label) => {
        this.setState(({toDoData}) => {
            const idx = toDoData.findIndex((el) => el.id === id);
            const newArr = [...toDoData];
           
            if (prop === 'delete') {
                newArr.splice(idx, 1);

                return {
                    toDoData: newArr
                }
            } else if (prop === 'add' && label !== '') {
                newArr.push(this.createData(label));

                return {
                    toDoData: newArr
                }
            } else if (prop === 'important' || prop === 'done'){
                newArr[idx][prop] = !newArr[idx][prop];

                return {
                    newArr
                }
            }
            
        });
    };

    onSearchChange = (term) => {
        this.setState ({ term });
    };

    search = (toDoData, term) => {
        if (term.length === 0) {
            return toDoData;
        }

        return toDoData.filter((el) => {
            return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        });
    };

    filter = (toDoData, active) => {
        switch (active) {
            case 'all': 
                return toDoData;
            case 'active':
                return toDoData.filter((el) => !el.done);
            case 'done':
                return toDoData.filter((el) => el.done);
            default:
                return toDoData;
        }
    };

    onFilterChange = (active) => {
        this.setState({ active });
    };


    render() {
        const { toDoData, term, active } = this.state;

        const done = toDoData.filter((el) => el.done).length;
        const rest = toDoData.length - done;
        const visible = this.filter(this.search(toDoData, term), active);

        return (
            <div>
                <AppHeader done={done} 
                            rest={rest} />
                <SearchPanel onSearchChange={ this.onSearchChange } 
                            active={ active }
                            onFilterChange={ this.onFilterChange } />
                <ToDoList todos={ visible } 
                        importantChange={ this.changeData } 
                        doneChange={ this.changeData }
                        deleteItem={ this.changeData } 
                />
                <CreateItem addItem={ this.changeData } />
            </div>
        );
    }  
}
