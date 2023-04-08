import React from "react";
import styles from "./styles.module.scss";

const ToolSkill = () => {
  const SkillList = [
    "HTML5",
    "CSS",
    "Javascript",
    "React",
    "typescript",
    "SCSS",
    "Jquery",
    "Laravel",
    "Bootstrap",
    "godomall",
    "GnuBoard",
    "Cafe24",
  ];

  const ToolList = [
    "Figma",
    "AdobePhotoShop",
    "AdobeIllustrater",
    "GIT",
    "AdobeXD",
    "Jira",
    "confluence",
    "slack",
    "flex",
    "AWS",
  ];

  const StudyList = [
    { id: 1, date: "16.02.25 ~ 16.06.07", txt: "디지털 스마트 UI/UX 디자인" },
    {
      id: 2,
      date: "21.06.30 ~ 21.08.19",
      txt: "클라우드 기반 빅데이터를 활용한 자바 개발자 과정",
    },
    {
      id: 3,
      date: "22.05.22 ~ 22.07.31",
      txt: "[프론트 엔드 개발] 리액트(React JS) 자바스크립트",
    },
  ];

  return (
    <div className={styles.study_wrap}>
      <div className={styles.tool}>
        <h3>Skill & Tool</h3>

        <ul className={styles.st}>
          <li>
            <h5>Skill</h5>
            <div>
              {SkillList.map((item, index) => {
                return <em key={index}>{item}</em>;
              })}
            </div>
          </li>
          <li>
            <h5>Tool</h5>
            <div>
              {ToolList.map((item, index) => {
                return <em key={index}>{item}</em>;
              })}
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.study}>
        <h3>Study</h3>

        <ul>
          {StudyList.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.date}</span>
                {item.txt}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToolSkill;
