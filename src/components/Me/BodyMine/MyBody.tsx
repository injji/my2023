import { useAtom } from "jotai";
import { HollyAtom, HabbitAtom } from "../../../store/StoreMain";
import styles from "./style.module.scss";

import mybody from "../../../assets/image/main/body.svg";
import mybag from "../../../assets/image/main/bag.svg";
import mybag_top from "../../../assets/image/main/bag_top.svg";
import arm_left_up from "../../../assets/image/main/left_up.svg";
import arm_left_down from "../../../assets/image/main/left_down.svg";
import arm_right_up from "../../../assets/image/main/right_up.svg";
import arm_right_down from "../../../assets/image/main/right_down.svg";
import hand_right from "../../../assets/image/main/right_hand.svg";

const MyBody = () => {
  const [hollyModal, setHollyModal] = useAtom(HollyAtom);
  const handleHollyModal = () => {
    setHollyModal(!hollyModal);
  };

  const [habbitModal, setHabbitModal] = useAtom(HabbitAtom);
  const handleHabbitModal = () => {
    setHabbitModal(!habbitModal);
  };

  return (
    <div className={styles.body_all}>
      <div className={styles.body_me}>
        <img src={mybody} />
      </div>

      <div className={styles.bag}>
        <div className={styles.bagclick} onClick={handleHollyModal}></div>
        <img src={mybag} className={styles.bag_body} />
        <img src={mybag_top} className={styles.bag_top} />
      </div>

      <div className={styles.arm_l_up}>
        <img src={arm_left_up} />
      </div>
      <div className={styles.arm_l_down}>
        <div className={styles.camera} onClick={handleHabbitModal}></div>
        <img src={arm_left_down} />
      </div>

      <div className={styles.arm_r_up}>
        <img src={arm_right_up} />
      </div>

      <div className={styles.arm_r_down}>
        <img src={arm_right_down} />
      </div>

      <div className={styles.hand_r}>
        <img src={hand_right} />
      </div>
    </div>
  );
};

export default MyBody;
