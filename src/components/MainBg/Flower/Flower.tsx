import React from "react";
import { useAtom } from "jotai";
import { FlowerAtom } from "../../../store/StoreMain";
import styles from "./style.module.scss";

import flower_red from "../../../assets/image/main/flower_leaf.svg";
import flower_center from "../../../assets/image/main/flower_circle.svg";
import flower_bottom from "../../../assets/image/main/flower_bottom.svg";
import flower_left from "../../../assets/image/main/flower_leaf2.svg";

const Flower = () => {
  const [flowerModal, setFlowerModal] = useAtom(FlowerAtom);
  const handleFlowerModal = () => {
    setFlowerModal(!flowerModal);
  }

  return (
    <div className={styles.flower_wrap}>
      <div className={styles.flower} onClick={handleFlowerModal}>
        <img src={flower_center} className={styles.center} />
        <img src={flower_red} />
      </div>

      <div className={styles.leaf}>
        <img src={flower_bottom} className={styles.leaf_r} />
        <img src={flower_left} className={styles.leaf_l} />
      </div>
    </div>
  );
};

export default Flower;
