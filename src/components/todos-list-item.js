import React from 'react';
export default class TodosListItem extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          isEditing: false
       };
    }

    onEditClick() {
        this.setState({ isEditing: true})
    }
    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <tr>
                    <button>Save</button>
                    <button>Cancel</button>
                </tr>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
              <td>{this.props.task}</td>
              {this.renderActionSection()}             
            </tr>
        );
    }
}