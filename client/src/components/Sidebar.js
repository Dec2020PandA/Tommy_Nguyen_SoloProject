import React from "react";
import { Link } from "@reach/router";

import styles from "../css-modules/Sidebar.module.css";

export default () => {
  return (
    <div className={`pt-3 pl-3 pr-3 ${styles.sideBar}`}>
      <h1 className="mb-4">LOGO</h1>
      <Link to="">
        <button className={`${styles.navBtn}`}>Overview</button>
      </Link>
      <Link to="itinerary">
        <button className={`${styles.navBtn}`}>Itinerary</button>
      </Link>
      <Link to="budget">
        <button className={`${styles.navBtn}`}>Budget</button>
      </Link>
      <Link to="todo">
        <button className={`${styles.navBtn}`}>To Do</button>
      </Link>
    </div>
  );
};
