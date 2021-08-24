import { useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
    console.log(todos);
  };

  return (
    <div className="App">
      <h1>To Do</h1>

      <FormControl>
        <InputLabel>Add ToDo</InputLabel>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </FormControl>
      <Button
        type="submit"
        onClick={addTodo}
        disabled={!input}
        variant="contained"
        color="primary"
        disableElevation
      >
        Add Todo
      </Button>

      {/* <form action="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          type="submit"
          onClick={addTodo}
          disabled={!input}
          variant="contained"
          color="primary"
          disableElevation
        >
          Add Todo
        </Button>
      </form> */}

      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

//  Building the Todo App
//  1.  Create an input and button with a ul
//  2.  Use state to manage the todo list
//  3.  Map over the todo list to create a list of li items
//  4.  Use state to manage user input and setup a button click event
//  5.  Push input to todos
