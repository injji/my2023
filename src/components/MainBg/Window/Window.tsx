import React from "react";
import { useAtom } from "jotai";
import { WindowAtom } from "../../../store/StoreMain";
import styles from "./style.module.scss";

import window_figma from "../../../assets/image/main/window1.svg";
import window_react from "../../../assets/image/main/window2.svg";

const Window = () => {
  const [windowModal, setWindowModal] = useAtom(WindowAtom);
  const handleWindowModal = () => {
    setWindowModal(!windowModal);
  };

  return (
    <div className={styles.window}>
      <span className={styles.figma_window} onClick={handleWindowModal}>
        <img src={window_figma} />
      </span>

      <span className={styles.react_window} onClick={handleWindowModal}>
        <img src={window_react} />
      </span>
    </div>
  );
};

export default Window;
