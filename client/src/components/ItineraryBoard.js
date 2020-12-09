import React, { useState } from "react";

import styles from "../css-modules/ItineraryBoard.module.css";

export default (props) => {
  const [itinerary] = useState(props.itinerary);

  return (
    <div className={styles.itineraryCard}>
      <h6 className={styles.cardLabel}>Itinerary</h6>
      {itinerary.map((day, index) => (
        <div className={styles.dayCard}>
          <p className={styles.dayCardDay}>{day.day}</p>
          <p className={styles.dayCardActivity}>
            {day.activities[0].activityName}{" "}
          </p>
          <p className={styles.dayCardTime}>{day.activities[0].time}</p>
        </div>
      ))}
    </div>
  );
};