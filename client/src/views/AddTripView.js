import React, { useState } from "react";
import { navigate } from "@reach/router";

import styles from "../css-modules/Form.module.css";

import axios from "axios";

export default (props) => {
  const [tripName, setTripName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});

  const createTrip = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/trips/new", {
        tripName,
        location,
        itinerary: [],
        todo: [],
        expenses: [],
        userId: props.id,
      })
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
          console.log(errors);
        } else {
          navigate(`/user/${props.id}/trips/${res.data._id}/dashboard`);
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form
      className="container mt-4 d-flex flex-column align-items-center"
      onSubmit={createTrip}
    >
      <h1 className={styles.header}>Let's Plan a New Trip!</h1>
      <div className={styles.formGroup}>
        <input
          type="text"
          className={styles.formInput}
          value={tripName}
          placeholder="Trip Name"
          onChange={(e) => setTripName(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          className={styles.formInput}
          value={location}
          placeholder="Trip Location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <input type="submit" className={styles.btn} />
    </form>
  );
};
