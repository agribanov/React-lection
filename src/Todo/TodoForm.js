import React, { Component } from 'react';

export default class TodoForm extends Component {
    onFormSubmit(e) {
        e.preventDefault();

        this.props.onSubmit();
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <input type="text" name="taskTitle" />
                <button>Add</button>
            </form>
        );
    }
}
