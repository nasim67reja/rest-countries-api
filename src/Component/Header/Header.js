import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles["header-element"]} flex`}>
          <h3 className={styles.text}>Where in the world?</h3>
          <p className={styles.mode}>
            <ion-icon name="moon-outline"></ion-icon>
            Dark Mode
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
