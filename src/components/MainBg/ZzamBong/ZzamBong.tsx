import React from "react";
import { useAtom } from "jotai";
import { ZzambbongAtom } from "../../../store/StoreMain";

import styles from "./style.module.scss";

import zzam from "../../../assets/image/main/zzambbong.svg";
import stick1 from "../../../assets/image/main/stick1.svg";
import stick2 from "../../../assets/image/main/stick2.svg";

const ZzamBong = () => {
  const [zzambbongModal, setZzambbongModal] = useAtom(ZzambbongAtom);
  const handlezzambbongModal = () => {
    setZzambbongModal(!zzambbongModal);
  };

  return (
    <div className={styles.zzam_wrap} onClick={handlezzambbongModal}>
      <div className={styles.zzambbong}>
        <img src={zzam} />
      </div>

      <div className={styles.stick_wrap}>
        <div className={styles.stick}>
          <em>
            <img src={stick1} />
          </em>
          <em className={styles.stick2}>
            <img src={stick2} />
          </em>

          <div className={styles.men}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZzamBong;
