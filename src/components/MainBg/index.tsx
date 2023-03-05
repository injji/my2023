import React from "react";
import Window from "./Window/Window";

import "./style.scss";
import Flower from './Flower/Flower';
import Mountain from './Mountain/Mountain';
import ZzamBong from './ZzamBong/ZzamBong';
import Bgs from './Bgs/Bgs';

const MainBg = () => {
  return (
    <div className="main_bg">
        {/* 윈도우 창 */}
      <Window />

      {/* 동백 */}
      <Flower />

      {/* 산 */}
      <Mountain />

      {/* 짬뽕 */}
      <ZzamBong />

      {/* 그외 배경 */}
      <Bgs />
    </div>
  );
};

export default MainBg;
