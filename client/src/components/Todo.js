import React, { useState } from "react";

import styles from "../css-modules/Todo.module.css";

export default (props) => {
  const [completed, setCompleted] = useState(props.completed);

  const toggleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <div className={styles.todoCard} onClick={toggleComplete}>
      <p className={styles.todoCardTodo}>{props.todoName}</p>
      <p className={styles.todoCompleted}>{completed ? "C" : "O"}</p>
    </div>
  );
};
