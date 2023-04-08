import React from "react";

import jiin from "../../assets/image/page/about.jpg";
import Charactor from "./Charactor";
import Skill from "./Skill";
import ToolSkill from "./ToolSkill";

import styles from "./styles.module.scss";

const About = () => {
  return (
    <div className={styles.about_wrap}>
      <div className={styles.about}>
        <h1>모두의 지인, 김지인 프론트엔드 개발자 입니다.</h1>

        <div className={styles.myself}>
          <div className={styles.jiin}>
            <img src={jiin} alt="지인" />
          </div>

          <Skill />
        </div>

        <div className={styles.hi}>
          <h3>안녕하세요👋</h3>
          <p>
            웹 프론트엔드로 일하고 있는 김지인이라고 합니다. 저는 주로 React,
            TypeScript로 개발을 하고 있으며 atomic 구조로 개발이 가능합니다.
            웹디자이너와 퍼블리셔로 5년이상의 경력이 있어 포토샵, figma로
            디자인을 하거나 사용자에 맞는 UI 기획을 담당하기도 하였습니다.
            "어제보다 더 나은 내일을 만들자!" 라는 것을 모토로 꾸준한 기술
            개발과 공부를 하고 있습니다.웹 프론트엔드로 일하고 있는 김지인이라고
            합니다. 저는 주로 React, TypeScript로 개발을 하고 있으며 atomic
            구조로 개발이 가능합니다. 웹디자이너와 퍼블리셔로 5년이상의 경력이
            있어 포토샵, figma로 디자인을 하거나 사용자에 맞는 UI 기획을
            담당하기도 하였습니다. "어제보다 더 나은 내일을 만들자!" 라는 것을
            모토로 꾸준한 기술 개발과 공부를 하고 있습니다.
          </p>
        </div>

        <ToolSkill />

        <Charactor />
      </div>
    </div>
  );
};

export default About;
