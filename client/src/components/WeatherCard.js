import React, { useState } from "react";

import styles from "../css-modules/WeatherCard.module.css";

export default (props) => {
  const [completed, setCompleted] = useState(props.completed);

  console.log(props.day.temp);
  return (
    <div className={styles.weatherCard}>
      <h1 className={styles.weatherDate}>Day {props.index + 1}</h1>
      <div className={styles.weatherIcon}>ICON</div>
      <p className={styles.weatherTemps}>
        <span>{Math.floor((props.day.temp.min - 273.15) * (9 / 5) + 32)}°</span>
        /
        <span>{Math.floor((props.day.temp.max - 273.15) * (9 / 5) + 32)}°</span>
      </p>
    </div>
  );
};
