import React, { Component } from 'react';

export default class TodoListItem extends Component {
    onDeleteClick = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.item.id);
    };

    onElementClick = () => {
        this.props.onToggle(this.props.item.id);
    };

    getElementStyling({ isDone }) {
        const styling = { ...ELEMENT_STYLING };

        if (isDone) {
            styling.backgroundColor = 'green';
        }

        return styling;
    }

    render() {
        const { item } = this.props;
        return (
            <li
                onClick={this.onElementClick}
                style={this.getElementStyling(item)}
            >
                {item.title}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={this.onDeleteClick}>x</span>
            </li>
        );
    }
}

const ELEMENT_STYLING = {
    backgroundColor: 'yellow',
};
