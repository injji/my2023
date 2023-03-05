import styles from "./style.module.scss";
import nabong from "../../../assets/image/main/cat.svg";
import tail from "../../../assets/image/main/cat_tail.svg";

const Cat = () => {
  return (
    <div className={styles.nabong}>
      <div className={styles.eyes}>
        <span></span>
        <span></span>
      </div>
      <img src={tail} className={styles.c_tail} />
      <img src={nabong} />
    </div>
  );
};

export default Cat;
