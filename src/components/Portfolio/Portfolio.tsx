import React from "react";

import PortfolieModal from "./PortfolioModal/PortfolieModal";
import PortfolioList from "./PortfolioList";
import styles from "./styles.module.scss";

const Portfolio = () => {
  return (
    <div className={styles.port_wrap}>
      <h1>Portfolio</h1>

      <PortfolioList />
      <PortfolieModal />
    </div>
  );
};

export default Portfolio;
