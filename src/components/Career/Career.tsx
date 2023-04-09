import React from "react";
import CareerList from './CareerList';
import styles from "./styles.module.scss";

const Career = () => {
  return (
    <div className={styles.career_wrap}>
      <h1>WORK EXPERIENCE</h1>

      <div>
        <CareerList />
      </div>
    </div>
  );
};

export default Career;
