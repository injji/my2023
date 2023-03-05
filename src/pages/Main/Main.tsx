import React from "react";
import MainBg from "../../components/MainBg";
import MainText from "../../components/MainBg/MainText/MainText";
import Me from "../../components/Me";

import styles from "./style.module.scss";

const Main = () => {
  return (
    <div className={styles.main_page}>
      <MainText />

      <div className={styles.main_wrap}>
        {/* 캐릭터 */}
        <Me />

        {/* 배경 */}
        <MainBg />
      </div>
    </div>
  );
};

export default Main;
