import styles from "./Button.module.scss";

export function Button({ className, AsComponent = "button", ...props }) {
  return <AsComponent className={`${styles.btn} ${className}`} {...props} />;
}
