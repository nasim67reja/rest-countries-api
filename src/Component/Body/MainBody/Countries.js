import React, { useState, useEffect, useCallback } from "react";

import styles from "./Countries.module.css";
import Country from "./country/Country";

const Countries = ({ getSelectRegion, getInputText }) => {
  const [data, setdata] = useState("");

  const allCountry = useCallback(async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries = await response.json();

      countries.sort((a, b) => {
        return a.name.common < b.name.common
          ? -1
          : a.name.common > b.name.common
          ? 1
          : 0;
      });

      setdata(countries);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    allCountry();
  }, [allCountry]);

  let content = <p className={styles.load}>loading...</p>;

  if (data) {
    // data.forEach((element) => {
    //   console.log(element.altSpellings[0]);
    // });

    let arr = [...data];

    //select
    if (getSelectRegion) {
      arr = arr.filter((country) => {
        return country.region === getSelectRegion;
      });
    }
    // input
    if (getInputText) {
      arr = arr.filter((country) =>
        country.name.common.toLowerCase().startsWith(getInputText)
      );
    }

    if (arr.length === 0) {
      content = <p className={styles.load}>No Country found. 😢</p>;
    } else {
      content = arr.map((country) => (
        <Country
          key={country.name.common}
          id={country.name.common}
          info={country}
          all={data}
        ></Country>
      ));
    }
  }

  return (
    <div className={styles["country-box"]}>
      <ul className={styles["country-list"]}>{content}</ul>
    </div>
  );
};

export default Countries;
