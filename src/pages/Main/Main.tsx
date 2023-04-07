import React from "react";
import MainBg from "../../components/MainBg";
import MainText from "../../components/MainBg/MainText/MainText";
import Me from "../../components/Me";
import menu from "../../assets/image/main/menu_icon.svg";
import MainModal from "../../components/MainModal/MainModal";

import styles from "./style.module.scss";

const Main = () => {
  return (
    <div className={styles.main_page}>
      <MainText />
      <button className={styles.menu}>
        <img src={menu} />
      </button>

      <div className={styles.main_wrap}>
        {/* 캐릭터 */}
        <Me />

        {/* 배경 */}
        <MainBg />
      </div>

      <MainModal />
    </div>
  );
};

export default Main;
