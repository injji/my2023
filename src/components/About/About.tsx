import React from "react";
import Image from "react-image-webp";

import Charactor from "./Charactor";
import Skill from "./Skill";
import ToolSkill from "./ToolSkill";

import styles from "./styles.module.scss";

const About = () => {
  return (
    <div className={styles.about_wrap}>
      <div className={styles.about}>
        <h1>모두의 지인, 개발자 김지인 입니다.</h1>

        <div className={styles.myself}>
          <div className={styles.jiin}>
            <Image
              webp={require("../../assets/image/page/about.webp")}
              alt="지인"
            />
          </div>

          <Skill />
        </div>

        <div className={styles.hi}>
          <h3>안녕하세요👋</h3>
          <p>
            인사하는 순간 모두의 지인이 되는 김지인이라고 합니다. <br />
            저는 주로 React, TypeScript, Javascript로 개발을 하고 있으며 Html,
            css는 자신있다고 말씀드릴 수 있습니다. 현재 저의 개발 이슈는 atomic
            구조를 이용한 컴포넌트의 재사용성을 높이는 데에 힘쓰고 있습니다.
            <br />
            프론트엔드로는 2년차이지만, 웹디자이너와 퍼블리셔로 5년이상의 경력이
            있어 포토샵, figma를 활용한 UI의 기획 및 디자인이 가능합니다. 
            또한 웹 프로젝트의 팀장을 맡아본 적도 있어 다양한 역할을 맡은
            동료들과 긍정적으로 소통하고 스케쥴 관리의 경험도 가지고 있습니다. <br />
            제 좌우명은 "어제보다 더 나은 내일을 만들자!" 입니다. 그렇기에 모르는 것이 있다면 처음엔 스스로 답을 찾고자하지만 혼자만의 힘으로 부족하다면 서슴없이 질문을 통해 답을 찾습니다. 배우고자 하는 분야라면 배우는 것을 좋아하고 어려운 것이 있다면 빠르게 습득하기 위해 방법을 가리지 않는 모습을 가지고 있습니다.
          </p>
        </div>

        <ToolSkill />

        <Charactor />
      </div>
    </div>
  );
};

export default About;
