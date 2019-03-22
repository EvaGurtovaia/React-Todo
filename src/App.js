import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need 
  //to work with your state
  state = {
    toDoList: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ]
  }
  
  addToList = ( toDoItem ) => { 
    this.setState( ( state ) => {
      const newtoDoList = state.toDoList.concat({task: toDoItem,
        id: Date.now(),
        completed: false
      } );

      console.log("newtoDoList", newtoDoList);
      return ( {
        toDoList: newtoDoList
      } )
    } );
  };

  taskCompleted = (toDoItemId) => {    
    this.setState( (state) => {
      const newTodoList = state.toDoList.map( (item) => {
        if (item.id === toDoItemId) 
          return { task: item.task, id: item.id, completed: true };
        return item;
      } );

      return ( {
        toDoList: newTodoList
      } )

    } );
  }

  taskDeleted = () => {
    this.setState ((state) =>{
      const newTodoList = state.toDoList.filter((item) => {
        if (item.completed == true)
          return false;
        return true;
      });

      return ( {
        toDoList: newTodoList
      } )

    })
  }

  render() {
    return (
      <div className="main">
      <h1>My ToDo List</h1>
     <TodoForm addtoDo= { this.addToList } taskDeleted =  {this.taskDeleted} />
     <TodoList toDoList = {this.state.toDoList} taskCompleted = {this.taskCompleted}/>
      </div>
    );
  }
}

export default App;


