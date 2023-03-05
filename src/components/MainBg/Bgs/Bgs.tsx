import React from "react";
import styles from "./style.module.scss";

import bigLeaf from "../../../assets/image/main/big_leaf.svg";
import small_leaf1 from "../../../assets/image/main/small_leaf1.svg";
import small_leaf2 from "../../../assets/image/main/small_leaf2.svg";
import dumble1 from "../../../assets/image/main/dumble1.svg";
import dumble2 from "../../../assets/image/main/dumble2.svg";

const Bgs = () => {
  return (
    <div className={styles.backs}>
      <div className={styles.big_leaf}>
        <img src={bigLeaf} />
      </div>

      <div className={styles.right_bg}>
        <div className={styles.big_leaf}>
          <img src={bigLeaf} />
        </div>

        <div className={styles.s_leaf1}>
          <img src={small_leaf1} />
        </div>

        <div className={styles.s_leaf2}>
          <img src={small_leaf2} />
        </div>
      </div>

      <div className={styles.dumble}>
        <div className={styles.dumble1}>
          <img src={dumble1} />
        </div>

        <div className={styles.dumble2}>
          <img src={dumble2} />
        </div>

        <div className={styles.dumble3}>
          <img src={dumble1} />
        </div>

        <div className={styles.dumble4}>
          <img src={dumble2} />
        </div>
      </div>
    </div>
  );
};

export default Bgs;
