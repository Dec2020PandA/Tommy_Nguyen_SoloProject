import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

import styles from "../css-modules/ExpenseBoard.module.css";

export default (props) => {
  const [expenses, setExpenses] = useState(props.expenses);
  const [total, setTotal] = useState();

  useEffect(() => {
    var totalCost = 0;
    for (let i = 0; i < expenses.length; i++) {
      totalCost += expenses[i].expensePrice;
    }

    setTotal(totalCost);

    console.log(totalCost);
  }, []);

  return (
    <div className={styles.dashCard}>
      <div>
        <h4 className={styles.cardLabel}>Expenses</h4>
        <div className={styles.totalBudgetContainer}>
          <h1 className={styles.totalBudget}>{total}</h1>
          <h3 className={styles.currency}>USD</h3>
        </div>
        {expenses <= 3
          ? expenses.map((expense, index) => (
              <div key={index} className={styles.expenseCard}>
                <p className={styles.expenseCardIcon}>ICON</p>
                <p className={styles.expenseCardName}>{expense.expenseName} </p>
                <p className={styles.expenseCardPrice}>
                  ${expense.expensePrice}
                </p>
              </div>
            ))
          : expenses.slice(0, 3).map((expense, index) => (
              <div key={index} className={styles.expenseCard}>
                <p className={styles.expenseCardIcon}>ICON</p>
                <p className={styles.expenseCardName}>{expense.expenseName} </p>
                <p className={styles.expenseCardPrice}>
                  ${expense.expensePrice}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};
