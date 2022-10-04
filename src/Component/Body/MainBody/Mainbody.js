import React, { useState } from "react";

import Input from "./Input";
import styles from "./Mainbody.module.css";
import Countries from "./Countries";
import SelectRegion from "./selectRegion/SelectRegion";

const Mainbody = () => {
  const [selectRegion, setSelectRegion] = useState("");
  const [inputText, setInputText] = useState("");

  // from select text
  const catchRegion = (country) => {
    setSelectRegion(country);
  };

  //from input
  const inputTextHandler = (text) => {
    setInputText(text);
  };

  return (
    <section className={styles["main-body"]}>
      <div className="container">
        <div className={styles["header-section"]}>
          <Input getInputText={inputTextHandler} />
          <SelectRegion onGetRegion={catchRegion} />
        </div>

        <Countries getInputText={inputText} getSelectRegion={selectRegion} />
      </div>
    </section>
  );
};

export default Mainbody;
