import React from "react";
import { useAtom } from "jotai";
import {
  FlowerAtom,
  ZzambbongAtom,
  WindowAtom,
  CatAtom,
  HabbitAtom,
  HollyAtom,
} from "../../store/StoreMain";

import styles from "./styles.module.scss";

import menu1 from "../../assets/image/icon/nav1.png";
import menu2 from "../../assets/image/icon/nav2.png";
import menu3 from "../../assets/image/icon/nav3.png";
import menu4 from "../../assets/image/icon/nav4.png";

const Menu = () => {
  const [flowerModal, setflowerModal] = useAtom(FlowerAtom);
  const [zzambbongModal, setzzambbongModal] = useAtom(ZzambbongAtom);
  const [nabongModal, setnabongModal] = useAtom(CatAtom);
  const [hobbitModal, sethobbitModal] = useAtom(HabbitAtom);
  const [hollyModal, sethollyModal] = useAtom(HollyAtom);
  const [windowModal, setwindowModal] = useAtom(WindowAtom);

  const handleflowerModal = () => setflowerModal(!flowerModal);
  const handlezzambbongModal = () => setzzambbongModal(!zzambbongModal);
  const handlenabongModal = () => setnabongModal(!nabongModal);
  const handlehobbitModal = () => sethobbitModal(!hobbitModal);
  const handlehollyModal = () => sethollyModal(!hollyModal);
  const handlewindowModal = () => setwindowModal(!windowModal);

  return (
    <div className={styles.nav_wrap}>
      <nav>
        <h1>MENU</h1>
        <ul>
          <li>
            <img src={menu1} />
            <p>지인 이야기</p>
          </li>
          <li>
            <img src={menu2} />
            <p>경력 기술서</p>
          </li>
          <li>
            <img src={menu3} />
            <p>포트폴리오</p>
          </li>
          <li>
            <img src={menu4} />
            <p>문의해보기</p>
          </li>
        </ul>
      </nav>

      <div className={styles.ani_btn}>
        <button onClick={handlehollyModal} disabled={hollyModal}>
          쉬는날에는?
        </button>
        <button onClick={handlehobbitModal} disabled={hobbitModal}>
          선택적 특기는?
        </button>
        <button onClick={handlezzambbongModal} disabled={zzambbongModal}>
          소소한 취미는?
        </button>
        <button onClick={handlenabongModal} disabled={nabongModal}>
          모시는 주인님은?
        </button>
        <button onClick={handleflowerModal} disabled={flowerModal}>
          좋아하는 향기는?
        </button>
        <button onClick={handlewindowModal}>포트폴리오!?</button>
      </div>
    </div>
  );
};

export default Menu;
