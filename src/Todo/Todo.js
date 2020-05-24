import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todo extends React.Component {
    state = {
        todos: [
            { id: 1, title: 'do something', isDone: false },
            { id: 2, title: 'do something 2', isDone: true },
            { id: 3, title: 'do something 3', isDone: false },
        ],
    };

    addNewTodo = (newTodo) => {
        // {title: ''}
        newTodo.id = Date.now();
        newTodo.isDone = false;

        this.setState({
            todos: [...this.state.todos, newTodo],
        });
    };

    render() {
        return (
            <>
                <TodoList todos={this.state.todos} />
                <TodoForm onSubmit={this.addNewTodo} />
            </>
        );
    }
}
