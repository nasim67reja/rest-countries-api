import React, { useContext } from "react";

import { ThemeContext } from "../../../../App";
import styles from "./Country.module.css";

const Country = ({ info, id, all }) => {
  const selectedCountry = useContext(ThemeContext);
  const showInfoHandler = (e) => {
    let listItem = e.target.closest(".list-item");
    selectedCountry.country1(listItem.id);
    selectedCountry.allCountry(info);
    selectedCountry.allData(all);
  };
  return (
    <li
      id={id}
      className={styles.card + " list-item"}
      onClick={showInfoHandler}
    >
      <img src={info.flags.svg} alt="flag" />
      <div className={styles.textbox}>
        <h4 className={styles.heading}>{info.name.common}</h4>
        <p className={styles.text}>Popolation :{info.population}</p>
        <p className={styles.text}>
          Region : {`${info.region ? info.region : ""}`}
        </p>
        <p className={styles.text}>
          Capital :{`${info.capital ? info.capital[0] : ""}`}
        </p>
      </div>
    </li>
  );
};

export default Country;
