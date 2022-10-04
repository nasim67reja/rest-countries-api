import React, { useContext } from "react";

import { ThemeContext } from "../../../App";

const Button = () => {
  const back = useContext(ThemeContext);

  const backHomeHandler = () => {
    back.backHome();
  };
  return (
    <button className="btn" onClick={backHomeHandler}>
      <span>&larr;</span> Back
    </button>
  );
};

export default Button;
