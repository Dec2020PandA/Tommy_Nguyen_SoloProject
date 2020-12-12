import React, { useState } from "react";

import axios from "axios";

import styles from "../css-modules/BudgetView.module.css";

export default (props) => {
  const [expenses, setExpenses] = useState(props.expenses);
  const [expenseName, setExpenseName] = useState("");
  const [expensePrice, setExpensePrice] = useState("");

  console.log(props);

  const submitBudget = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8000/api/trips/${props.tripId}/expense/new`, {
        expenseName,
        expensePrice,
      })
      .then((res) => {
        console.log(res);
        setExpenses([...expenses, { expenseName, expensePrice }]);

        setExpenseName("");
        setExpensePrice("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className={styles.inputGroup} onSubmit={submitBudget}>
        <input
          className={styles.expenseInput}
          type="text"
          placeholder="What is the expense for?"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          className={styles.expenseInput}
          type="text"
          placeholder="What is your budget?"
          value={expensePrice}
          onChange={(e) => setExpensePrice(e.target.value)}
        />
        <input className={styles.expenseSubmit} type="submit" value="+" />
      </form>
      <div className={styles.todoList}>
        {expenses.map((expense, index) => (
          <div className={styles.expenseCard} key={index}>
            <div className={styles.expenseIcon}>ICON</div>
            <h1 className={styles.expenseName}>{expense.expenseName}</h1>
            <h1 className={styles.expensePrice}>${expense.expensePrice}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
