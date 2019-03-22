import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    constructor(props) { super (props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    addtoDo = () => {
        this.props.addtoDo( this.state.value );
        this.setState({value: "" });
    }

    render() { 
        return (<div className="buttons">
            <input className ="duties" placeholder="What do I have to do!" 
                value={this.state.value} onChange={this.handleChange}
                />
            <button className ="add"onClick={ this.addtoDo }> Add to do</button>
            <button className ="yay" onClick= {this.props.taskDeleted} > Clear completed</button>
        </div>)
    
    }

  }

export default TodoForm;