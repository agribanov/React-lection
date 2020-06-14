import React from 'react';

function TodoItem({ item, onToggle }) {
    return (
        <li onClick={onToggle.bind(null, item)} style={getStyles(item)}>
            {item.title}
        </li>
    );
}

export default TodoItem;

function getStyles(item) {
    return {
        backgroundColor: item.isDone ? 'green' : 'red',
    };
}
