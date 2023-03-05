import styles from './style.module.scss'
import neck from "../../../assets/image/main/neck.svg";

const Neck = () => {
  return (
    <div className={styles.neck_img}>
      <img src={neck} />
    </div>
  );
};


export default Neck;
