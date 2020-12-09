import React, { useState } from "react";

import styles from "../css-modules/TopNav.module.css";

export default (props) => {
  return (
    <div className={`pt-3 pl-4 pr-4 ${styles.topNav}`}>
      <h1>{props.tripName}</h1>

      <div className={styles.profileGroup}>
        <div className={styles.profileText}>
          <h1 className={styles.userName}>Hi {props.userName}!</h1>
          <a>
            <p className={styles.settingsBtn}>Settings</p>
          </a>
        </div>
        <p className={styles.profileImage}>Image</p>
      </div>
    </div>
  );
};
