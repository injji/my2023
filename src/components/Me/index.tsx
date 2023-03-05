import React from "react";

import './style.scss'

import MyHead from "./HeadMine/MyHead";
import Neck from "./NeckMine/Neck";
import MyBody from './BodyMine/MyBody';
import Cat from './Cat/Cat';
import Leg from './Leg/Leg';

const Me = () => {
  return (
    <div className="my_me">
      {/* 머리 */}
      <MyHead />

      {/* 목 */}
      <Neck />

      {/* 몸통 */}
      <MyBody />

      {/* 나봉이 */}
      <Cat />

      {/* 다리 */}
      <Leg />
    </div>
  );
};

export default Me;
