import { BarLoader } from "react-spinners";
import styles from "./LoadingSpinner.module.scss";

export function LoadingSpinner() {
  return (
    <div className={styles.loader}>
      <BarLoader color="hsla(0, 97%, 63%,.75)" />
    </div>
  );
}
