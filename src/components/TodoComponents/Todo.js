import React from 'react';
import './Todo.css';

const Todo = (props) => (
<div className={ props.item.completed ? "done" : "" } onClick={ () => props.taskCompleted( props.item.id )}>
  {props.item.task} 
</div>
)

export default Todo;