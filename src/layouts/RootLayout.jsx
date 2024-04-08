import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { SearchBar } from "../components/SearchBar/SearchBar";
import styles from "./RootLayout.module.scss";
import { useState } from "react";
import { LoadingSpinner } from "../components/UI/LoadingSpinner/LoadingSpinner";

export function RootLayout() {
  const [selectedPage, setSelectedPage] = useState("home");
  const { state } = useNavigation();
  return (
    <>
      <div className={styles.grid}>
        <Header
          className={styles.header}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <SearchBar
          className={`${styles.search} | container`}
          selectedPage={selectedPage}
        />
        <div className={`${styles.outlet} | container`}>
          {state === "loading" ? <LoadingSpinner /> : <Outlet />}
        </div>
      </div>
    </>
  );
}
