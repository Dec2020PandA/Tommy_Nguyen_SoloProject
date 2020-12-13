import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";

import styles from "../css-modules/WeatherBoard.module.css";

export default (props) => {
  const [weatherDayList, setDayList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=41.8781&lon=87.6298&exclude=minutely,hourly&appid=db4ffbf321338ff473960ae65838e81d`
      )
      .then((res) => {
        console.log(res);
        setDayList(res.data.daily);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(weatherDayList);
  return (
    <div className={styles.dashCard}>
      <h6 className={styles.cardLabel}>{props.location}</h6>
      <div className={styles.weaterList}>
        {weatherDayList.slice(0, 4).map((day, index) => (
          <WeatherCard key={index} index={index} day={day} />
        ))}
      </div>
    </div>
  );
};
