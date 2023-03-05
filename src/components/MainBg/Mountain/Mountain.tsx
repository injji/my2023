import React from "react";
import styles from "./style.module.scss";

import mountain1 from "../../../assets/image/main/san1.svg";
import mountain2 from "../../../assets/image/main/san2.svg";

const Mountain = () => {
  return (
    <div className={styles.mountain_wrap}>
      <div className={styles.san1}>
        <img src={mountain1} />
      </div>
      
      <div className={styles.san2}>
        <img src={mountain2} />
      </div>
    </div>
  );
};

export default Mountain;
