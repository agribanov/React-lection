import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends Component {
    render() {
        const { todos, onDelete, onToggle } = this.props;
        return (
            <ul>
                {todos.map((item) => (
                    <TodoListItem
                        key={item.id}
                        item={item}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))}
            </ul>
        );
    }
}
