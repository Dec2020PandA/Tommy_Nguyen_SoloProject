import React from "react";
import { Link } from "@reach/router";

export default () => {
  return (
    <div className="d-flex flex-column ml-4 mr-4 pr-3 pl-3 pt-4 border-right">
      <h1 className="mb-4">LOGO</h1>
      <Link to="/">
        <button>Overview</button>
      </Link>
      <Link to="/">
        <button>Itinerary</button>
      </Link>
      <Link to="/">
        <button>Budget</button>
      </Link>
      <Link to="/">
        <button>To Do</button>
      </Link>
    </div>
  );
};
