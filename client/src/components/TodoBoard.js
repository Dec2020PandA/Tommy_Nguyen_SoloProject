import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

import Todo from "../components/Todo";

import styles from "../css-modules/TodoBoard.module.css";

export default (props) => {
  const [todoList, setTodoList] = useState(props.todos);

  return (
    <div className={styles.dashCard}>
      <h6 className={styles.cardLabel}>Todo</h6>
      {todoList <= 6
        ? todoList.map((todo, index) => (
            <Todo
              key={index}
              todoName={todo.todoName}
              completed={todo.completed}
            />
          ))
        : todoList
            .slice(0, 5)
            .map((todo, index) => (
              <Todo
                key={index}
                todoName={todo.todoName}
                completed={todo.completed}
              />
            ))}

      <button className={styles.planBtn}>Add More</button>
    </div>
  );
};
