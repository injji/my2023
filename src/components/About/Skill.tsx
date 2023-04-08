import React from "react";
import styles from "./styles.module.scss";

const Skill = () => {
  const KeySkill = [
    {
      id: 1,
      skill: "React",
      su: "70%",
      docs: "React를 이용한 개발을 주로 하고 있습니다.",
    },
    {
      id: 2,
      skill: "TypeScript",
      su: "30%",
      docs: "Typescript를 이용하고 있으며 atomic 형태의 개발이 가능합니다.",
    },
    {
      id: 3,
      skill: "Figma",
      su: "80%",
      docs: "Figma의 프로토타입 형태의 디자인이 가능합니다.",
    },
  ];

  return (
    <div className={styles.skill}>
      <h3>KEY SKILLS</h3>
      <ul>
        {KeySkill.map((item) => {
          return (
            <li key={item.id}>
              <div className={styles.key}>
                <p>[ {item.skill} ]</p>
                <div>
                  <span style={{ width: item.su }}></span>
                </div>
              </div>
              <em>: {item.docs}</em>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skill;
