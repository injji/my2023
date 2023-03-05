import styles from "./style.module.scss";

import face from "../../../assets/image/main/head.svg";
import mouse from "../../../assets/image/main/mouse.svg";
import mouseOn from "../../../assets/image/main/mouse_on.svg";

const MyHead = () => {
  return (
    <div className={styles.head_wrap}>
      <div className={styles.face}>
        <div className={styles.eye}>
          <span></span>
          <span></span>
        </div>

        <div className={styles.mouse}>
          <img src={mouse} />
          <img src={mouseOn} className={styles.talk} />
        </div>

        <em></em>

        <img src={face} />
      </div>
    </div>
  );
};

export default MyHead;
