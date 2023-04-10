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

const MainAniBtn = () => {
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
    <div className={styles.ani_btn}>
      <button onClick={handlehollyModal} disabled={hollyModal}>
        쉬는 날?
      </button>
      <button onClick={handlehobbitModal} disabled={hobbitModal}>
        나의 특기?
      </button>
      <button onClick={handlezzambbongModal} disabled={zzambbongModal}>
        소소한 취미?
      </button>
      <button onClick={handlenabongModal} disabled={nabongModal}>
        나봉쨩?
      </button>
      <button onClick={handleflowerModal} disabled={flowerModal}>
        스멜 굿!
      </button>
      <button onClick={handlewindowModal}>포트폴리오!?</button>
    </div>
  );
};

export default MainAniBtn;
