import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import './Todo.css';
const useStyles = makeStyles((theme) => ({
  // modal: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  paper: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
    setInput('');
  };
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <input
            type="text"
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={updateTodo}>Update</Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="sets reps etc" />
        </ListItem>
        <EditIcon onClick={(e) => setOpen(true)} />
        {/* <button onClick={(e) => setOpen(true)}>Edit</button> */}
        <DeleteIcon
          onClick={(e) => {
            db.collection('todos').doc(props.todo.id).delete();
          }}
        />
        {/* <Button
          onClick={(e) => {
            db.collection('todos').doc(props.todo.id).delete();
          }}
        >
          Delete
        </Button> */}
      </List>
    </>
  );
}

export default Todo;
