import {
  BookmarkedLogo,
  HomeLogo,
  MoviesLogo,
  SeriesLogo,
  SiteLogo,
} from "../UI/Svg/Svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export function Header({ className, selectedPage, setSelectedPage }) {
  return (
    <>
      <header className={`${styles.header} ${className}`}>
        <SiteLogo />
        <nav>
          <Link to="/home">
            <HomeLogo
              onClick={() => setSelectedPage("home")}
              className={`${styles.icon} ${
                selectedPage === "home" && styles.active
              }`}
            />
          </Link>

          <Link to="/movies">
            <MoviesLogo
              onClick={() => setSelectedPage("movies")}
              className={`${styles.icon} ${
                selectedPage === "movies" && styles.active
              }`}
            />
          </Link>

          <Link to="/series">
            <SeriesLogo
              onClick={() => setSelectedPage("series")}
              className={`${styles.icon} ${
                selectedPage === "series" && styles.active
              }`}
            />
          </Link>

          <Link to="/bookmarked">
            <BookmarkedLogo
              onClick={() => setSelectedPage("bookmarked")}
              className={`${styles.icon} ${
                selectedPage === "bookmarked" && styles.active
              }`}
            />
          </Link>
        </nav>

        <img
          className={styles.profile}
          src="./assets/image-avatar.png"
          alt="Profile picture"
        />
      </header>
    </>
  );
}
