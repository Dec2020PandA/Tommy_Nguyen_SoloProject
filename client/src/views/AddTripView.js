import React, { useState } from "react";

export default () => {
  const [tripName, setTripName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <form className="container-md mt-4 d-flex flex-column align-items-center ">
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
