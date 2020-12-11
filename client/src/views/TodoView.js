import React from "react";

import styles from "../css-modules/TodoView.module.css";

export default (props) => {
  console.log(props.todos);
  return (
    <div>
      {props.todos.map((todo, index) => (
        <div key={index}>
          <h1>{todo.todoName}</h1>
          <div>{todo.completed ? "O" : "C"} </div>
        </div>
      ))}
    </div>
  );
};
