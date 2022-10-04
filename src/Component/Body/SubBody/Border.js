import styles from "./Border.module.css";

const Border = ({ infoCountry, allApi, onClickedBorder }) => {
  let border = <p className={styles.backup}>no border found 😢</p>;

  if (infoCountry.borders) {
    const filteredArr = allApi.filter((country) =>
      infoCountry.borders.includes(country.cca3)
    );

    //
    const showBorderHandler = (e) => {
      const clickborder = filteredArr.filter(
        (country) => country.cca3 === e.target.id
      );
      onClickedBorder(...clickborder);
    };

    border = filteredArr.map((border) => (
      <button
        key={border.cca3}
        id={border.cca3}
        className={styles.btn}
        onClick={showBorderHandler}
      >
        {border.name.common}
      </button>
    ));
  }

  return (
    <div className={styles.border}>
      <div className={styles["border-title"]}>Border Countries :</div>
      <div className={styles["btn-list"]}>{border}</div>
    </div>
  );
};

export default Border;
