import React from 'react';

export default class TodoList extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
              <input type="text" placeholder="What do I need to do?" ref="createInput"/>
              <button>Create</button>
            </form>
        );
    }
    handleCreate(event) {
       event.preventDefault();
    }
}