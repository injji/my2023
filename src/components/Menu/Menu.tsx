import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MainAniBtn from "./MainAniBtn";

import styles from "./styles.module.scss";

import menu1 from "../../assets/image/icon/nav1.png";
import menu2 from "../../assets/image/icon/nav2.png";
import menu3 from "../../assets/image/icon/nav3.png";
import menu4 from "../../assets/image/icon/nav4.png";

const Menu = () => {
  /** 현재 url 파악을 위함 */
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div className={styles.nav_wrap}>
      <nav>
        <h1>MENU</h1>
        <ul>
          <li>
            <Link to="./about">
              <img src={menu1} />
              <p>지인 이야기</p>
            </Link>
          </li>
          <li>
            <Link to="./career">
              <img src={menu2} />
              <p>경력 기술서</p>
            </Link>
          </li>
          <li>
            <Link to="./portfolio">
              <img src={menu3} />
              <p>포트폴리오</p>
            </Link>
          </li>
          <li>
            <img src={menu4} />
            <p>문의해보기</p>
          </li>
        </ul>
      </nav>

      {url === '/' && <MainAniBtn />}
    </div>
  );
};

export default Menu;
