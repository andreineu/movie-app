import React from "react";

import styles from "./CardLoading.module.css";

const ActorCardLoading = () => {
  return (
    <div className={`w-[154px] h-[258px] ${styles.skeleton}`}>
      <div className="w-40 h-[180px] rounded-lg shadow-lg bg-gray-200"></div>
      <div className="w-[140px] h-2 rounded-lg shadow-lg bg-gray-200 mt-4"></div>
      <div className="w-28 h-2 rounded-lg shadow-lg bg-gray-200 mt-3"></div>
    </div>
  );
};

export default ActorCardLoading;
