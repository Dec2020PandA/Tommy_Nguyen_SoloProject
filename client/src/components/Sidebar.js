import React, { useState } from "react";
import { Link } from "@reach/router";

import styles from "../css-modules/Sidebar.module.css";

export default () => {
  const [active, setActive] = useState("overview");

  return (
    <div className={`pt-3 pl-3 pr-3 ${styles.sideBar}`}>
      <h1 className="mb-4">LOGO</h1>
      <Link to="">
        <button
          onClick={(e) => setActive("overview")}
          className={active == "overview" ? styles.active : styles.navBtn}
        >
          Overview
        </button>
      </Link>
      <Link to="itinerary">
        <button
          onClick={(e) => setActive("itinerary")}
          className={active == "itinerary" ? styles.active : styles.navBtn}
        >
          Itinerary
        </button>
      </Link>
      <Link to="budget">
        <button
          onClick={(e) => setActive("budget")}
          className={active == "budget" ? styles.active : styles.navBtn}
        >
          Budget
        </button>
      </Link>
      <Link to="todo">
        <button
          onClick={(e) => setActive("todo")}
          className={active == "todo" ? styles.active : styles.navBtn}
        >
          To Do
        </button>
      </Link>
    </div>
  );
};
