import React, { useState } from "react";

import styles from "./input.module.css";

const Input = ({ getInputText }) => {
  const [isContain, setIscontain] = useState(false);
  const [countryName, setCountryName] = useState("");

  const inputElement = (e) => {
    getInputText(e.target.value);
    setCountryName(e.target.value);
    if (e.target.value.length > 0) {
      setIscontain(true);
    }
  };

  // clear input field
  const clearInputHandler = () => {
    setCountryName("");
    setIscontain(false);
  };

  return (
    <React.Fragment>
      <div className={styles["input-box"]}>
        <span id={styles.search}>
          <ion-icon
            style={{ width: "20px", height: "20px", opacity: "0.4" }}
            name="search"
          ></ion-icon>
        </span>

        <input
          className={styles.input}
          type="text"
          value={countryName}
          onChange={inputElement}
        />

        {isContain && (
          <span onClick={clearInputHandler} id={styles.close}>
            <ion-icon
              name="close"
              style={{ width: "23px", height: "23px", opacity: "0.6" }}
            ></ion-icon>
          </span>
        )}
      </div>
    </React.Fragment>
  );
};

export default Input;
