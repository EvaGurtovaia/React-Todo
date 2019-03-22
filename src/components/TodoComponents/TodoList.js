// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo  from './Todo';
import './Todo.css';

const TodoList = (props) => 
 <div className ="list"> 
     {props.toDoList.map((toDoItem) => 
        <Todo taskCompleted= {props.taskCompleted} item={toDoItem} key={toDoItem.id} />
        
        )}

 </div>
;

export default TodoList;