import { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [noteInput, setNote] = useState('');

  const [workouts, setWorkouts] = useState([]);
  const [workoutName, setWorkoutName] = useState('');

  //  when the app loads, we need to listen to the database and fetch new items as they get added / removed
  useEffect(() => {
    // db.collection('workouts')
    //   .orderBy('timestamp', 'desc')
    //   .onSnapshot((snapshot) => {
    //     setWorkouts(
    //       snapshot.docs.map((doc) => ({

    //   }))
    //     )
    //   });

    db.collection('todos')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            note: doc.data().note,
          }))
        );
        //docs is every todo
      });
  }, []);

  // const addWorkout = (e) => {
  //   e.preventDefault();
  //   db.collection('workouts').add({
  //     workoutName: 'lower body',
  //     exercises: ['Squat', 'RDL', 'Nordic'],
  //   });
  // };
  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      note: noteInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //  with the above code, we dont need to worry about the setTodos in this function. when anything is added to the db, it will fire off a snapshot which will then update the todos list
    // setTodos([...todos, input]);
    setInput('');
    setNote('');
  };

  return (
    <div className="App">
      <h1>Exercise List</h1>

      <form action="">
        <input
          placeholder="Back Squat"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          placeholder="Note"
          type="text"
          value={noteInput}
          onChange={(e) => setNote(e.target.value)}
        />

        <Button
          type="submit"
          onClick={addTodo}
          disabled={!input || !noteInput}
          variant="contained"
          color="primary"
          disableElevation
        >
          Add Exercise
        </Button>
      </form>
      {/* 
      <form action="">
        <h1>{workoutName}</h1>
        <input
          placeholder="Workout name"
          type="text"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        <input
          placeholder="Note"
          type="text"
          value={noteInput}
          onChange={(e) => setNote(e.target.value)}
        />

        <Button
          type="submit"
          onClick={addTodo}
          disabled={!input || !noteInput}
          variant="contained"
          color="primary"
          disableElevation
        >
          Add Exercise
        </Button>
      </form> */}

      <ul>
        {todos.map((todo) => {
          return <Todo todo={todo} />;
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
//  6.  Factor out code to a component and implement material ui list
//  7.  Add firebase (use config + the default code from video (1:35))
//  8.  ...
//  9.  Adding items to the database:
//        in our addTodo function, we need to add the input value as a key value pair to our collection
//        db.collection('todos').add({ todos: input, timestamp: //// })
//        useEffect to add to the db at initial render
//        we can access the database via db.collection('todos')
//        use onSnapshot((snapshot) => {}) to setTodos
//        snapshot.docs.map() to map over each doc item (each todo)
//        make each doc item an object with an id and todo
//        id will be doc.id, todo will be doc.data().todos

// 10.  Deleting items from the database
//        we made the todo prop an object to give it an id
//        now we can use the id to delete it from the database
//        pass todo as a prop to the todo component
//        create a button with the onclick prop that deletes it
//        db.collection('todos').doc(props.todo.id).delete();

//  {/*
//       <FormControl>
//         <InputLabel>Add ToDo</InputLabel>
//         <Input

//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//       </FormControl>
//       <Button
//         type="submit"
//         onClick={addTodo}
//         disabled={!input}
//         variant="contained"
//         color="primary"
//         disableElevation
//       >
//         Add Todo
//       </Button> */}
