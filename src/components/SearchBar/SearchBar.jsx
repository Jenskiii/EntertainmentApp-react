import { useNavigation } from "react-router-dom";
import { SearchIcon } from "../UI/Svg/Svg";
import styles from "./SearchBar.module.scss";
import { PuffLoader } from "react-spinners";

export function SearchBar({ className, selectedPage }) {
  const { state } = useNavigation();

  let placeholder;
  if (selectedPage === "home") placeholder = "Search for movies or TV series";
  if (selectedPage === "movies") placeholder = "Search for movies";
  if (selectedPage === "series") placeholder = "Search for TV series";
  if (selectedPage === "bookmarked")
    placeholder = "Search for bookmarked shows";

  return (
    <>
      <form className={className}>
        <label className={styles.search} htmlFor="search">
          {/* if loading show spinner */}
          {state === "loading" ? (
            <PuffLoader color="hsla(0, 97%, 63%)" size={30} />
          ) : (
            <SearchIcon />
          )}

          <input
            name="search"
            id="search"
            type="search"
            placeholder={placeholder}
          />
        </label>
      </form>
    </>
  );
}
