import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {



    render() {

        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>

                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={this.btnStyle()}>X</button> </p>

            </div>
        )
    }

    // STYLING
    getStyle = () => {
        return {
            background: '#fff',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    btnStyle = () => {
        return {
            background: '#fff',
            float: 'right',
            padding: '2px 3px',
            color: '#e26060',
            borderRadius: '30%'

        }
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todoitem
