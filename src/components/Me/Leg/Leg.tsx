import React from "react";
import styles from "./style.module.scss";

import right_leg from "../../../assets/image/main/right_leg.svg";
import left_leg from "../../../assets/image/main/left_leg.svg";

const Leg = () => {
  return (
    <div className={styles.leg_wrap}>
      <span className={styles.r_leg}>
        <img src={right_leg} />
      </span>

      <span className={styles.l_leg}>
        <img src={left_leg} />
      </span>
    </div>
  );
};

export default Leg;
