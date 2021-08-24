import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Take dogs for walk',
    'Take the rubbish out',
  ]);
  const [input, setInput] = useState('Add Item');
  return (
    <div className="App">
      <h1>To Do</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onClick={(e) => setInput('')}
      />
      <button>Add Todo</button>
      <h1>{input}</h1>

      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
