import React, { useState } from "react";
import { navigate } from "@reach/router";
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
      className="container-md mt-4 d-flex flex-column align-items-center"
      onSubmit={createTrip}
    >
      <h1 className="mb-4">Let's Plan a New Trip!</h1>
      <div className="form-group w-75">
        <label className="form-label text-black-50">Trip Name</label>
        <input
          type="text"
          className="form-control"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
        />
      </div>
      <div className="form-group w-75">
        <label className="form-label text-black-50">Location</label>
        <input
          type="text"
          className="form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <input type="submit" className="btn btn-md btn-primary" />
    </form>
  );
};
