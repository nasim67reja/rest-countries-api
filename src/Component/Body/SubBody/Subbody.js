import React, { useContext, useState } from "react";

import { ThemeContext } from "../../../App";
import styles from "./Subbody.module.css";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import Button from "./Button";
import Border from "./Border";

const Subbody = () => {
  const getDataFromApp = useContext(ThemeContext);

  // let infoCountry = getDataFromApp.appAllCountry;
  const [infoCountry, setInfoCountry] = useState(getDataFromApp.appAllCountry);

  const getBorder = (border) => {
    setInfoCountry(border);
  };

  // for border component
  let allApi = getDataFromApp.allApi;

  return (
    <section className={styles["selected-country"]}>
      <div className="container">
        <Button />
        <div className={styles.grid}>
          <div className={styles["image-box"]}>
            <img src={infoCountry.flags.svg} alt="flag" />
          </div>
          <div className={styles["text-box"]}>
            <h3 className={styles["heading-tertiary"]}>
              {infoCountry.name.common}
            </h3>
            <div className={styles.grid}>
              <LeftColumn infoCountry={infoCountry} />
              <RightColumn infoCountry={infoCountry} />
            </div>
            <Border
              infoCountry={infoCountry}
              allApi={allApi}
              onClickedBorder={getBorder}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subbody;
