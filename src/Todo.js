import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import db from './firebase';

function Todo(props) {
  let today = new Date();
  let date = `${
    today.getMonth() + 1
  }-${today.getDate()}-${today.getFullYear()} `;

  return (
    <div>
      <List className="todo__list">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary={date} />
        </ListItem>
        <Button
          onClick={(e) => {
            db.collection('todos').doc(props.todo.id).delete();
          }}
        >
          Delete
        </Button>
      </List>
    </div>
  );
}

export default Todo;
