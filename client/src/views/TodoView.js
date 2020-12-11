import React, { useState } from "react";

import axios from "axios";

import styles from "../css-modules/TodoView.module.css";

export default (props) => {
  const [todos, setTodos] = useState(props.todos);
  const [newTodo, setNewTodo] = useState("");

  console.log(props);

  const submitTodo = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8000/api/trips/${props.tripId}/todo/new`, {
        todoName: newTodo,
        completed: false,
      })
      .then((res) => {
        console.log(res);
        setTodos([...todos, { todoName: newTodo, completed: false }]);

        setNewTodo("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className={styles.inputGroup} onSubmit={submitTodo}>
        <input
          className={styles.todoInput}
          type="text"
          placeholder="What do I need to do next?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <input className={styles.todoSubmit} type="submit" value="+" />
      </form>
      <div className={styles.todoList}>
        {todos.map((todo, index) => (
          <div className={styles.todoCard} key={index}>
            <h1 className={styles.todoCardTodo}>{todo.todoName}</h1>
            <div className={styles.todoCompleted}>
              {todo.completed ? "O" : "C"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
