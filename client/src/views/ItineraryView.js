import React, { useState } from "react";

import styles from "../css-modules/ItineraryView.module.css";

export default (props) => {
  const [itinerary, setItinerary] = useState(props.itinerary);

  console.log(props.itinerary);
  return (
    <div>
      <div className={styles.left}>
        <div className={styles.dayList}>
          {itinerary.map((day, index) => (
            <div className={styles.dayCard} key={index}>
              <h2 className={styles.dayText}>{day.day}</h2>
              <div>
                <h1 className={styles.dayCardActivity}>
                  {day.activities[0].activityName}
                </h1>
                <h3 className={styles.dayCardLocation}>
                  {day.activities[0].location}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
