import React, { useState } from "react";

import axios from "axios";

import styles from "../css-modules/ItineraryView.module.css";

export default (props) => {
  const [itinerary, setItinerary] = useState(props.itinerary);
  const [mainActivity, setActivity] = useState("");
  const [mainLocation, setLocation] = useState("");

  const submitDay = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8000/api/trips/${props.tripId}/day/new`, {
        mainActivity,
        mainLocation,
        activities: [],
      })
      .then((res) => {
        console.log(res);
        setItinerary([
          ...itinerary,
          { mainActivity, mainLocation, activities: [] },
        ]);

        setActivity("");
        setLocation("");
      })
      .catch((err) => console.log(err));
  };

  console.log(props);
  return (
    <div>
      <div className={styles.left}>
        <div className={styles.dayList}>
          {itinerary.map((day, index) => (
            <div className={styles.dayCard} key={index}>
              <div className={styles.dayContainer}>
                <h2 className={styles.dayLabel}>Day</h2>
                <h1 className={styles.dayText}>{index + 1}</h1>
              </div>
              {day.activities[0].activityName && (
                <div>
                  <h1 className={styles.dayCardActivity}>{day.mainActivity}</h1>
                  <h3 className={styles.dayCardLocation}>{day.mainLocation}</h3>
                </div>
              )}
            </div>
          ))}

          <form className={styles.dayForm} onSubmit={submitDay}>
            <input
              className={styles.dayInput}
              type="text"
              placeholder="What is the main activity for the day?"
              value={mainActivity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <input
              className={styles.dayInput}
              type="text"
              placeholder="Where is it?"
              value={mainLocation}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input className={styles.dayBtn} type="submit" value="Add Day" />
          </form>
        </div>
      </div>
    </div>
  );
};
