import React from "react";
import PortList from "./portfolio_list.json";

import styles from "./styles.module.scss";
import calendar from "../../assets/image/icon/calendar.svg";

const PortfolioList = () => {
  return (
    <ul className={styles.port_ul}>
      {PortList.map((item) => {
        return (
          <li className={styles.grid}>
            <div className={styles.img}>
              <img
                src={`${process.env.PUBLIC_URL}/image/${item.project_img}`}
                alt={item.project_name}
              />
            </div>
            <div className={styles.port_content}>
              <h3>{item.project_name}</h3>
              <p>{item.project_docs}</p>
              <div className={styles.skill}>
                {item.skill.map((it) => {
                  return <em>{it}</em>;
                })}
              </div>
              <span>
                <img src={calendar} alt="달력" />
                {item.date}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PortfolioList;
