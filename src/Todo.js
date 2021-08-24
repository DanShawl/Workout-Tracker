import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

function Todo(props) {
  let today = new Date();
  let date = `${
    today.getMonth() + 1
  }-${today.getDate()}-${today.getFullYear()} `;
  return (
    <div>
      <List className="todo__list">
        <ListItem>
          <ListItemText primary={props.text} secondary={date} />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
