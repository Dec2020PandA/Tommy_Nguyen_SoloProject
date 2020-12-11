import React, { useState } from "react";

import styles from "../css-modules/WeatherCard.module.css";

export default (props) => {
  const [completed, setCompleted] = useState(props.completed);

  return (
    <div className={styles.weatherCard}>
      <h1 className={styles.weatherDate}>Date</h1>
      <div className={styles.weatherIcon}>ICON</div>
      <p className={styles.weatherTemps}>
        <span>50°</span>/<span>72°</span>
      </p>
    </div>
  );
};
