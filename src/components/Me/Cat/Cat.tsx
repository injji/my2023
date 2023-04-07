import { useAtom } from "jotai";
import { CatAtom } from "../../../store/StoreMain";

import styles from "./style.module.scss";
import nabong from "../../../assets/image/main/cat.svg";
import tail from "../../../assets/image/main/cat_tail.svg";

const Cat = () => {
  const [nabongCat, setNabongCat] = useAtom(CatAtom);
  const handleNabongCat = () => {
    setNabongCat(!nabongCat);
  };

  return (
    <>
      <div className={styles.clicknabong} onClick={handleNabongCat}></div>
      <div className={styles.nabong}>
        <div className={styles.eyes}>
          <span></span>
          <span></span>
        </div>
        <img src={tail} className={styles.c_tail} />
        <img src={nabong} />
      </div>
    </>
  );
};

export default Cat;
