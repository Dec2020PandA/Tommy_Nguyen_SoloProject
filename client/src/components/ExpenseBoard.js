import React, { useState } from "react";
import { Link } from "@reach/router";

import styles from "../css-modules/ExpenseBoard.module.css";

export default (props) => {
  const [expenses] = useState(props.expenses);

  return (
    <div className={styles.dashCard}>
      <div>
        <h4 className={styles.cardLabel}>Expenses</h4>
        <div className={styles.totalBudgetContainer}>
          <h1 className={styles.totalBudget}>2051.95</h1>
          <h3 className={styles.currency}>USD</h3>
        </div>
        {expenses.map((expense, index) => (
          <div key={index} className={styles.expenseCard}>
            <p className={styles.expenseCardIcon}>LOL</p>
            <p className={styles.expenseCardName}>{expense.expenseName} </p>
            <p className={styles.expenseCardPrice}>{expense.expensePrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
