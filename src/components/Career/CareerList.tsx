import React from "react";
import styles from "./styles.module.scss";
import styled from "styled-components";

const CareerList = () => {
  const Company = [
    {
      id: 1,
      company: "Colorverse (퍼피레드)",
      data: "22.12 ~ ",
      docs: "게임관련 메타버스 관련 앱의 런칭 예정",
      skill: [
        "React",
        "Typescript",
        "Javascript",
        "SCSS",
        "CSS",
        "styled-component",
        "styles-module",
        "Unity",
        "Figma",
        "GitLab",
        "Confluence",
        "Slack",
      ],
    },
    {
      id: 2,
      company: "이노티브아이엔씨",
      data: "21.11 ~ 22.11",
      docs: "쇼핑몰 앱 제작 및 마케팅 사업",
      skill: [
        "Laravel",
        "Jquery",
        "React",
        "CSS",
        "Figma",
        "AdobeXD",
        "Gitlab",
        "Jandi",
      ],
    },
    {
      id: 3,
      company: "프렌즈 메타버스",
      data: "21.08 ~ 21. 10",
      docs: "식품사업 및 메타버스 사업",
      skill: ["Javascript", "Jquery", "Gnuboard", "CSS", "Figma", "GitHub"],
    },
    {
      id: 4,
      company: "주식회사 플레임",
      data: "20.02 ~ 21.06",
      docs: "웹/앱 제작 및 악기 쇼핑몰 사업",
      skill: [
        "Javascript",
        "Jquery",
        "Gnuboard",
        "Cafe24",
        "Godomall",
        "CSS",
        "Figma",
        "AdobePhotoShop",
        "AdobeIllustrater",
      ],
    },
    {
      id: 5,
      company: "Hnbc",
      data: "19.04 ~ 19.10",
      docs: "전자담배 쇼핑몰 (단기)",
      skill: [
        "Jquery",
        "Gnuboard",
        "Cafe24",
        "CSS",
        "AdobePhotoShop",
        "AdobeIllustrater",
      ],
    },
    {
      id: 6,
      company: "디자인 제라",
      data: "18.10 ~ 19.02",
      docs: "웹 에이전시, 디자인 관련 사업",
      skill: [
        "Jquery",
        "Gnuboard",
        "Cafe24",
        "Godomall",
        "CSS",
        "AdobePhotoShop",
        "AdobeIllustrater",
      ],
    },
    {
      id: 7,
      company: "루브넷",
      data: "16.06 ~ 18.02",
      docs: "웹 에이전시, 개발, 디자인 관련 사업",
      skill: [
        "Jquery",
        "Gnuboard",
        "Cafe24",
        "Godomall",
        "Makeshop",
        "CSS",
        "AdobePhotoShop",
        "AdobeIllustrater",
      ],
    },
  ];

  return (
    <CareerWrap className={styles.career_list}>
      {Company.map((item) => {
        return (
          <li key={item.id}>
            <h3>{item.data}</h3>
            <div>
              <h5>{item.company}</h5>
              <ol>
                <li>{item.docs}</li>
                <SkillSet>
                  {item.skill.map((it, index) => (
                    <em key={index}>{it}</em>
                  ))}
                </SkillSet>
              </ol>
            </div>
          </li>
        );
      })}
    </CareerWrap>
  );
};

const CareerWrap = styled.ul`
  & > li {
    width: 100%;
    h3 {
      color: #000;
      font-weight: bold;
      font-size: 18px;
      width: 130px;
    }

    h5 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #000;
    }

    ol {
      li {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }

  @media (min-width: 1024px) {
    & > li {
      display: flex;
      justify-content: start;
      align-items: start;
      border: 2px solid #000;
      margin-bottom: 30px;
      padding: 30px 20px 20px 20px;

      div {
        width: calc(100% - 130px);
      }
    }
  }

  @media (max-width: 1023px) and (min-width: 769px) {
    & > li {
      display: flex;
      justify-content: start;
      align-items: start;

      border-bottom: 1px solid #000;
      padding: 0px 10px 20px 10px;
      margin-bottom: 30px;

      div {
        width: calc(100% - 130px);
      }
    }
  }

  @media (max-width: 769px) {
    & > li {
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;

      border-bottom: 1px solid #000;
      padding: 0px 10px 20px 10px;
      margin-bottom: 30px;

      div {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
`;

const SkillSet = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;

  em {
    font-size: 16px;
    padding: 3px 7px;
    color: #000;
    background-color: #a4f7ff;
    border-radius: 3px;
  }
`;

export default CareerList;
