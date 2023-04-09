import React from "react";
import PortfolioList from './PortfolioList';
import styles from "./styles.module.scss";

const Portfolio = () => {
  return (
    <div className={styles.port_wrap}>
      <h1>Portfolio</h1>

      <PortfolioList />
    </div>
  );
};

export default Portfolio;
