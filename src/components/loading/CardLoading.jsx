import styles from "./CardLoading.module.css";

const CardLoading = () => {
  return (
    <div className={`w-40 h-80 ${styles.skeleton}`}>
      <div className="w-40 h-60 rounded-lg shadow-lg bg-gray-200"></div>
      <div className="w-40 h-2 rounded-lg shadow-lg bg-gray-200 mt-8"></div>
      <div className="w-32 h-2 rounded-lg shadow-lg bg-gray-200 mt-3"></div>
      <div className="w-24 h-2 rounded-lg shadow-lg bg-gray-200 mt-3"></div>
    </div>
  );
};

//browselist mediarow

export default CardLoading;
