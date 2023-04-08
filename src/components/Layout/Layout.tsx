import React from "react";
import Menu from "../Menu/Menu";

import styles from "./styles.module.scss";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles.body_wrap}>
      <section>{props.children}</section>

      <Menu />
    </div>
  );
};

export default Layout;
