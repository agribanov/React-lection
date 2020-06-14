import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import api from '../api';
import TodoForm from './TodoForm';

function Todo() {
    const [todoItems, setTodoItems] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        api.get().then(({ data }) => setTodoItems(data));
    }, []);

    function toggleItem(item) {
        api.put(item.id, { ...item, isDone: !item.isDone }).then(({ data }) =>
            setTodoItems(
                todoItems.map((item) => (item.id === data.id ? data : item))
            )
        );
    }

    function onTitleChange(e) {
        setTitle(e.target.value);
    }

    function onSave() {
        api.post('', {
            title,
            isDone: false,
        }).then(({ data }) => setTodoItems([...todoItems, data]));

        setTitle('');
    }

    return (
        <>
            <ul>
                {todoItems.map((item) => (
                    <TodoItem key={item.id} item={item} onToggle={toggleItem} />
                ))}
            </ul>
            <TodoForm
                title={title}
                onTitleChange={onTitleChange}
                onSave={onSave}
            />
        </>
    );
}

export default Todo;
