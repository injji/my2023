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

import styles from "./style.module.scss";
import { Link } from 'react-router-dom';

const MainModal = () => {
  const [flowerModal] = useAtom(FlowerAtom);
  const [zzambbongModal] = useAtom(ZzambbongAtom);
  const [nabongModal] = useAtom(CatAtom);
  const [hobbitModal] = useAtom(HabbitAtom);
  const [hollyModal] = useAtom(HollyAtom);
  const [windowModal] = useAtom(WindowAtom);

  return (
    <>
      <div
        className={`
        ${styles.modal_wrap} 
        ${styles.flower} 
        ${flowerModal ? styles.act : ""}`}
      >
        <p>
          페이보릿 스멜 <em></em>
        </p>
        <h3>동백꽃 향기 러버</h3>
      </div>

      <div
        className={`
        ${styles.modal_wrap} 
        ${styles.zzambbong} 
        ${zzambbongModal ? styles.act : ""}`}
      >
        <p>
          소소한 즐거움 <em></em>
        </p>
        <h3>짬뽕 맛집 투어❤️</h3>
      </div>

      <div
        className={`
        ${styles.modal_wrap} 
        ${styles.shout} 
        ${hobbitModal ? styles.act : ""}`}
      >
        <p>
          선택적 취미 <em></em>
        </p>
        <h3>추억 저장소니까</h3>
      </div>

      <div
        className={`
        ${styles.modal_wrap} 
        ${styles.nabong} 
        ${nabongModal ? styles.act : ""}`}
      >
        <p>
          모시는 주인님 <em></em>
        </p>
        <h3>나봉님이 최고야</h3>
      </div>

      <div
        className={`
        ${styles.modal_wrap} 
        ${styles.holiday} 
        ${hollyModal ? styles.act : ""}`}
      >
        <p>
          홀리데이 기회 <em></em>
        </p>
        <h3>휴가날에는 여행가는게 국룰</h3>
      </div>

      <div
        className={`
        ${styles.modal_wrap} 
        ${styles.portfolio} 
        ${windowModal ? styles.act : ""}`}
      >
        <p>
          나의 모든 이야기 <em></em>
        </p>
        <div className={styles.h3_wrap}>
          <Link to="/about"><h3>궁금한 이야기 K.</h3> </Link> 
          {/* <span>GO</span> */}
        </div>
      </div>
    </>
  );
};

export default MainModal;
