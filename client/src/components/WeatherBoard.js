import React, { useState, useEffect } from "react";

import WeatherCard from "../components/WeatherCard";

import styles from "../css-modules/WeatherBoard.module.css";

export default (props) => {
  return (
    <div className={styles.dashCard}>
      <h6 className={styles.cardLabel}>{props.location}</h6>
      {/* {weatherList.map((day, index) => (
        
      ))} */}
      <div className={styles.weaterList}>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
};
