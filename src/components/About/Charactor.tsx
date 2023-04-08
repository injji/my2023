import React from "react";
import styles from "./styles.module.scss";

const Charactor = () => {
  const CharactorList = [
    { id: 1, personality: "긍정적 에너지", en: "Positive Energe" },
    { id: 2, personality: "끈기", en: "Tenacity" },
    { id: 3, personality: "5G 습득력", en: "Ability to Learn" },
    { id: 4, personality: "책임감", en: "A sense of Responsibility" },
    { id: 5, personality: "사교성", en: "Sociability" },
    { id: 6, personality: "섬세함", en: "Delicate" },
    { id: 7, personality: "많은 생각", en: "a lot of Thoughts" },
    { id: 8, personality: "일의 애착", en: "attachment to work" },
    { id: 9, personality: "인내심", en: "Patience" },
  ];

  return (
    <div className={styles.charactor}>
      <h3>CHARACTOR</h3>
      <ul>
        {CharactorList.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.personality}</h2>
              <span>{item.en}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Charactor;
