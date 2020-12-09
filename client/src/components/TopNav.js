import React, { useState } from "react";

import styles from "../css-modules/TopNav.module.css";

export default (props) => {
  return (
    <div className={`pt-3 pl-4 pr-4 ${styles.topNav}`}>
      <h1 className={styles.tripName}>{props.tripName}</h1>

      <div className={styles.profileGroup}>
        <div className={styles.profileText}>
          <h1 className={styles.userName}>Hi {props.userName}!</h1>
          <a>
            <p className={styles.settingsBtn}>Settings</p>
          </a>
        </div>
        <img
          className={styles.profileImage}
          src="https://cdn.dribbble.com/users/926776/screenshots/14351151/miles_morales_4x.png"
        />
      </div>
    </div>
  );
};
