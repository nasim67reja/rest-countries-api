import React, { useState } from "react";

import Header from "./Component/Header/Header";
import Mainbody from "./Component/Body/MainBody/Mainbody";
import Subbody from "./Component/Body/SubBody/Subbody";

export const ThemeContext = React.createContext("");

function App() {
  const [showMainBody, setshowMainBody] = useState(true);
  const [showSubBody, setShowSubBody] = useState(false);

  const [selectCountryFromApp, setSelectCountryFromApp] = useState("");
  const [selectAllCountryFromApp, setSelectAllCountryFromApp] = useState("");
  const [apiAllData, setApiAllData] = useState("");

  const selectedCountry = (country) => {
    setshowMainBody(false);
    setShowSubBody(true);
    setSelectCountryFromApp(country);
  };

  const totalCountry = (all) => {
    setSelectAllCountryFromApp(all);
  };

  // back home by back button
  const backHome = () => {
    setshowMainBody(true);
    setShowSubBody(false);
  };
  // api's all data
  const allData = (el) => {
    // console.log(el);
    setApiAllData(el);
  };

  return (
    <ThemeContext.Provider
      value={{
        country1: selectedCountry,
        allCountry: totalCountry,
        appCountry: selectCountryFromApp,
        appAllCountry: selectAllCountryFromApp,
        backHome: backHome,
        allData: allData,
        allApi: apiAllData,
      }}
    >
      <Header></Header>

      {showMainBody && <Mainbody />}
      {showSubBody && <Subbody />}
    </ThemeContext.Provider>
  );
}

export default App;
