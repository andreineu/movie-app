import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles["spinner-wrapper"]}>
      <svg viewBox="0 0 50 50" className={styles["spinner"]}>
        <circle className={styles["ring"]} cx="25" cy="25" r="22.5" />
        <circle className={styles["line"]} cx="25" cy="25" r="22.5" />
      </svg>
    </div>
  );
};

export default Loading;
