import styles from "./Card.module.scss";

export function Card({ title, year, category, rating, thumbnail }) {
  const cardImage = thumbnail.regular;
  return (
    <>
      <div className={styles.card}>
        {/* image */}
        <picture className={styles["card_img"]}> 
          <source media="(min-width: 65rem)" srcSet={cardImage.large} />
          <source media="(min-width: 35rem)" srcSet={cardImage.medium} />
          <img
            src={cardImage.small}
            alt={`Thumbnail of the movie called: ${title}`}
          />
        </picture>
        {/* body   */}
        <div className={styles["card_body"]}>
          <p>{year}</p>
          <p>&#x2022;</p>
          <p className={styles["card_category"]}>
            <img
              src={`./assets/${
                category === "Movie"
                  ? "icon-category-movie.svg"
                  : "icon-category-tv.svg"
              }`}
              alt=""
            />{" "}
            {category}
          </p>
          <p>&#x2022;</p>
          <p>{rating}</p>
        </div>
        {/* footer */}
        <h2 className="heading-XS">{title}</h2>
      </div>
    </>
  );
}
