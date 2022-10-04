import React from "react";

import styles from "./selectRegion.module.css";
const SelectRegion = ({ onGetRegion }) => {
  const getRegion = (e) => {
    onGetRegion(e.target.value);
  };
  return (
    <div>
      <select onChange={getRegion} className={styles.select}>
        <option defaultValue="selected" hidden="hidden">
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SelectRegion;
