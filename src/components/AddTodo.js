import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
        alert('Whoop whoop livin it uuuuup!!')


    }
    addBucketTitle = (e) => this.setState({ title: e.target.value })


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type="text"
                    title="name"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Create bucket list goal!!"
                    value={this.state.title}
                    onChange={this.addBucketTitle}
                />
                <input type="submit"
                    value="Submit"
                    className="btnSubmit"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
