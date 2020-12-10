import React, { useState } from "react";
import { Link } from "@reach/router";

import Todo from "../components/Todo";

import styles from "../css-modules/TodoBoard.module.css";

export default (props) => {
  const [todoList] = useState(props.todos);

  return (
    <div className={styles.dashCard}>
      <h6 className={styles.cardLabel}>Todo</h6>
      {todoList.map((todo, index) => (
        <Todo todoName={todo.todoName} completed={todo.completed} />
      ))}
    </div>
  );
};
