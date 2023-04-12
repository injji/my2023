import React from "react";
import { useAtom } from "jotai";
import { WindowAtom } from "../../../store/StoreMain";
import styles from "./style.module.scss";

const Window = () => {
  const [windowModal, setWindowModal] = useAtom(WindowAtom);
  const handleWindowModal = () => {
    setWindowModal(!windowModal);
  };

  return (
    <div className={styles.window}>
      <span className={styles.figma_window} onClick={handleWindowModal}>
        <picture>
          <source
            srcSet={`${process.env.PUBLIC_URL}/image/webp/figma.webp`}
            type="image/webp"
          />

          <img src={`${process.env.PUBLIC_URL}/image/figma.png`} alt="figma" />
        </picture>
      </span>

      <span className={styles.react_window} onClick={handleWindowModal}>
      <picture>
          <source
            srcSet={`${process.env.PUBLIC_URL}/image/webp/react.webp`}
            type="image/webp"
          />

          <img src={`${process.env.PUBLIC_URL}/image/react.png`} alt="react" />
        </picture>
      </span>
    </div>
  );
};

export default Window;
