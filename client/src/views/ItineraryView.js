import React, { useState } from "react";

import axios from "axios";

import styles from "../css-modules/ItineraryView.module.css";

export default (props) => {
  const [itinerary, setItinerary] = useState(props.itinerary);
  const [tripIndex, setTripIndex] = useState(0);
  const [mainActivity, setActivity] = useState("");
  const [mainLocation, setLocation] = useState("");

  const [activities, setActivities] = useState(
    props.itinerary[tripIndex].activities
  );
  const [activityName, setActivityName] = useState("");
  const [time, setTime] = useState("");
  const [location, setActivityLocation] = useState("");

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

  const submitActivity = (event) => {
    event.preventDefault();
    console.log("submit");
    axios
      .post(
        `http://localhost:8000/api/itinerary/${itinerary[tripIndex]._id}/activity/new`,
        {
          activityName,
          time,
          location,
        }
      )
      .then((res) => {
        console.log(res);
        setActivities([...activities, { activityName, time, location }]);

        setActivityName("");
        setTime("");
        setActivityLocation("");
      })
      .catch((err) => console.log(err));
  };

  console.log(tripIndex);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.dayList}>
          {itinerary.map((day, index) => (
            <div
              className={styles.dayCard}
              key={index}
              onClick={(e) => setTripIndex(index)}
            >
              <div className={styles.dayContainer}>
                <h2 className={styles.dayLabel}>Day</h2>
                <h1 className={styles.dayText}>{index + 1}</h1>
              </div>
              <div>
                <h1 className={styles.dayCardActivity}>{day.mainActivity}</h1>
                <h3 className={styles.dayCardLocation}>{day.mainLocation}</h3>
              </div>
            </div>
          ))}

          <form className={styles.dayForm} onSubmit={submitDay}>
            <input
              className={styles.dayInput}
              type="text"
              placeholder="What is the main activity?"
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
      <div className={styles.right}>
        <div className={styles.activityList}>
          {itinerary[tripIndex].activities.map((activity, index) => (
            <div key={index} className={styles.activityGroup}>
              <h3 className={styles.activityTime}>{activity.time}</h3>
              <div className={styles.activityCard}>
                <h1 className={styles.activityName}>{activity.activityName}</h1>
                <h3 className={styles.activityLocation}>{activity.location}</h3>
              </div>
            </div>
          ))}
          <form className={styles.dayForm} onSubmit={submitActivity}>
            <input
              className={styles.dayInput}
              type="text"
              placeholder="What's the Activity"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
            />
            <input
              className={styles.dayInput}
              type="text"
              placeholder="What time is it at?"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              className={styles.dayInput}
              type="text"
              placeholder="Where is it?"
              value={location}
              onChange={(e) => setActivityLocation(e.target.value)}
            />
            <input className={styles.dayBtn} type="submit" value="Add Day" />
          </form>
        </div>
      </div>
    </div>
  );
};
