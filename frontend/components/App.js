import React from 'react';
import TodoList from './TodoList';
import Form from './Form';




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }

      ]
    }
  }

  handleAdd = (name) => {
    // set State
    // change todos 
    // make a copy todos
    // add a new todo to the end

    const newTodo = {
        name: name, 
        id: Date.now(), 
        completed: false
    };

    this.setState({
      ...this.state, 
      todos: [...this.state.todos, newTodo]
    });
  }

  handleClear = () => {
      // setState 
      // loop through all todos
      // remove all todos that have completed === true
      // save filtered todos to state.
      this.setState = ({
          ...this.state,
          todos: this.state.todos.filter(todo => {
            return (todo.completed === false)
          })
      });

   }
  handleToggle = (clickedId) => {
    // set state
    // change todos
    // find the todo 
    // flip the value of ccompleted for that todo
    // keep all other todos the same 
    

    this.setState({
        ...this.state, 
        todos: this.state.todos.map(todo => {
            if (todo.id === clickedId) {
              return {
                ...todo, 
                completed: !todo.completed
              }
            } else {
              return todo;
            }
        })
    });
  }
  

  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1> Todos: </h1>
        
        <TodoList  handleToggle={this.handleToggle} todos={todos}/>
        <Form handleAdd={this.handleAdd}/>
        
        <button onClick={this.handleClear}>Hide Completed</button>
      </div>
    )
  }
}
