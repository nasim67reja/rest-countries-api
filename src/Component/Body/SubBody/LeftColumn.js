import React from "react";

const LeftColumn = ({ infoCountry }) => {
  //for nativeCountry
  const nativeCountry = infoCountry.name.nativeName
    ? Object.values(infoCountry.name.nativeName)
        .map((country) => country.common)
        .slice(0, 3)
        .join(" ,")
    : "";

  const { population, region, subregion, capital } = infoCountry;

  return (
    <div>
      <p className="description">
        <span className="title">Native Name :</span>
        {nativeCountry}
      </p>
      <p className="description">
        <span className="title">Population :</span>
        {population ? population : ""}
      </p>
      <p className="description">
        <span className="title">Region :</span>
        {region ? region : ""}
      </p>
      <p className="description">
        <span className="title">Sub Region :</span>
        {subregion ? subregion : ""}
      </p>
      <p className="description">
        <span className="title">Capital :</span>
        {capital ? capital[0] : ""}
      </p>
    </div>
  );
};

export default LeftColumn;
