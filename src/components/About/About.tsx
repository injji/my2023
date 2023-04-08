import React from "react";
import styles from "./styles.module.scss";

import jiin from "../../assets/image/page/about.jpg";

const About = () => {
  return (
    <div className={styles.about_wrap}>
      <div className={styles.about}>
        <h1>모두의 지인, 김지인 프론트엔드 개발자 입니다.</h1>

        <div className={styles.myself}>
          <div className={styles.jiin}>
            <img src={jiin} alt="지인" />
          </div>

          <div className={styles.skill}>
            <h3>KEY SKILLS</h3>
            <ul>
              <li>
                <div className={styles.key}>
                  <p>[ React ]</p>
                  <div>
                    <span style={{ width: "70%" }}></span>
                  </div>
                </div>

                <em>: React를 이용한 개발을 주로 하고 있습니다.</em>
              </li>

              <li>
                <div className={styles.key}>
                  <p>[ TypeScript ]</p>
                  <div>
                    <span style={{ width: "30%" }}></span>
                  </div>
                </div>
                <em>
                  : Typescript를 이용하고 있으며 atomic 형태의 개발이
                  가능합니다.
                </em>
              </li>

              <li>
                <div className={styles.key}>
                  <p>[ Figma ]</p>
                  <div>
                    <span style={{ width: "80%" }}></span>
                  </div>
                </div>
                <em>: Figma의 프로토타입 형태의 디자인이 가능합니다.</em>
              </li>
            </ul>
          </div>
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

        <div className={styles.study_wrap}>
          <div className={styles.tool}>
            <h3>Skill & Tool</h3>

            <ul className={styles.st}>
              <li>
                <h5>Skill</h5>
                <div>
                  <em>HTML5</em>
                  <em>CSS</em>
                  <em>Javascript</em>
                  <em>React</em>
                  <em>typescript</em>
                  <em>SCSS</em>
                  <em>Jquery</em>
                  <em>Laravel</em>
                  <em>Bootstrap</em>
                  <em>godomall</em>
                  <em>GnuBoard</em>
                  <em>Cafe24</em>
                </div>
              </li>
              <li>
                <h5>Tool</h5>
                <div>
                  <em>Figma</em>
                  <em>AdobePhotoShop</em>
                  <em>AdobeIllustrater</em>
                  <em>GIT</em>
                  <em>AdobeXD</em>
                  <em>Jira</em>
                  <em>confluence</em>
                  <em>slack</em>
                  <em>flex</em>
                  <em>AWS</em>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.study}>
            <h3>Study</h3>

            <ul>
              <li>
                <span>16.02.25 ~ 16.06.07</span>
                디지털 스마트 UI/UX 디자인
              </li>
              <li>
                <span>21.06.30 ~ 21.08.19</span>
                클라우드 기반 빅데이터를 활용한 자바 개발자 과정
              </li>
              <li>
                <span>22.05.22 ~ 22.07.31</span>
                [프론트엔드개발] 리액트(React JS) 자바스크립트
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.charactor}>
          <h3>CHARACTOR</h3>
          <ul>
            <li>
              <h2>긍정적 에너지</h2>
              <span>Positive Energe</span>
            </li>

            <li>
              <h2>끈기</h2>
              <span>Tenacity</span>
            </li>

            <li>
              <h2>5G 습득력</h2>
              <span>Ability to Learn</span>
            </li>

            <li>
              <h2>책임감</h2>
              <span>A sense of Responsibility</span>
            </li>

            <li>
              <h2>사교성</h2>
              <span>Sociability</span>
            </li>

            <li>
              <h2>섬세함</h2>
              <span>Delicate</span>
            </li>

            <li>
              <h2>많은 생각</h2>
              <span>a lot of Thoughts</span>
            </li>

            <li>
              <h2>일의 애착</h2>
              <span>attachment to work</span>
            </li>

            <li>
              <h2>인내심</h2>
              <span>Patience</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
