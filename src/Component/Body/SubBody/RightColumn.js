import React from "react";

const RightColumn = ({ infoCountry }) => {
  // for currencies
  const currencies = infoCountry.currencies
    ? Object.values(infoCountry.currencies)
        .map((cur) => cur.name)
        .slice(0, 3)
        .join(" ,")
    : "";

  // for languages
  const languages = infoCountry.languages
    ? Object.values(infoCountry.languages).slice(0, 3).join(" ,")
    : "";

  return (
    <div>
      <p className="description">
        <span className="title">Top Level Domain :</span>
        {infoCountry.altSpellings[0].toLowerCase()}
      </p>
      <p className="description">
        <span className="title">Currencies :</span>
        {currencies}
      </p>
      <p className="description">
        <span className="title">Languages :</span>
        {/* {infoCountry.languages} */}
        {languages}
      </p>
    </div>
  );
};

export default RightColumn;
