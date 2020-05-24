import React, { Component } from 'react';

export default class TodoForm extends Component {
    state = {
        taskTitle: '',
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            title: this.state.taskTitle,
        });

        this.setState({ taskTitle: '' });
    };

    onInputChange = (e) => {
        this.setState({
            taskTitle: e.target.value,
        });
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    autoComplete="off"
                    type="text"
                    name="taskTitle"
                    value={this.state.taskTitle}
                    onChange={this.onInputChange}
                />
                <button>Add</button>
            </form>
        );
    }
}
