import React from "react";
import { useAtom } from "jotai";
import { PortModalAtom, PortContentAtom } from "../../store/StorePage";

import PortList from "./portfolio_list.json";

import styles from "./styles.module.scss";
import styled from "styled-components";

import calendar from "../../assets/image/icon/calendar.svg";

const PortfolioList = () => {
  const [portModal, setPortModal] = useAtom(PortModalAtom);
  const [portContent, setPortContent] = useAtom(PortContentAtom);

  const handelPortModal = (targetId: number) => {
    setPortModal(!portModal);
    setPortContent(targetId);
  };

  return (
    <PortfolioWrap className={styles.port_ul}>
      {PortList.map((item) => {
        return (
          <li key={item.id} onClick={() => handelPortModal(item.id)}>
            <div className="img">
              <img
                src={`${process.env.PUBLIC_URL}/image/${item.project_img}`}
                alt={item.project_name}
              />
            </div>
            <div className="port_content">
              <h3>{item.project_name}</h3>
              <p>{item.project_docs}</p>

              <div className="skill">
                {item.skill.map((it, index) => {
                  return <em key={index}>{it}</em>;
                })}
              </div>

              <span>
                <img src={calendar} alt="달력" />
                {item.date}
              </span>
            </div>
          </li>
        );
      })}
    </PortfolioWrap>
  );
};

const PortfolioWrap = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;

  li {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;

    background-color: #fff;

    .img {
      width: 100%;
      height: 250px;
      background-color: #f9f9f9;
      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;

      border-bottom: 1px solid #aaa;

      img {
        width: auto;
        height: 100%;
      }
    }

    .port_content {
      height: calc(100% - 250px);

      .skill {
        display: flex;
        justify-content: start;
        align-items: start;
        flex-wrap: wrap;
        gap: 5px;

        em {
          color: #000;
          background-color: #a4f7ff;
          border-radius: 3px;
        }
      }

      span {
        color: #000;

        display: flex;
        justify-content: start;
        align-items: center;
        column-gap: 5px;

        img {
          width: 15px;
          height: auto;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    gap: 20px;

    li {
      width: calc(50% - 10px);
      height: 450px;

      .port_content {
        padding: 20px;

        h3 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #000;
        }

        p {
          height: 50px;
          font-size: 16px;
          color: #000;
          margin-bottom: 20px;
          line-height: 24px;
        }

        .skill {
          height: 50px;
          margin-bottom: 30px;

          em {
            font-size: 16px;
            padding: 3px 7px;
          }
        }

        span {
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
  }

  @media (max-width: 1023px) and (min-width: 769px) {
    gap: 20px;

    li {
      width: calc(50% - 10px);
      height: 450px;

      .port_content {
        padding: 20px;

        h3 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #000;
        }

        p {
          height: 50px;
          font-size: 16px;
          color: #000;
          margin-bottom: 20px;
          line-height: 24px;
        }

        .skill {
          height: 50px;
          margin-bottom: 30px;

          em {
            font-size: 16px;
            padding: 3px 7px;
          }
        }

        span {
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
  }

  @media (max-width: 769px) {
    flex-direction: column;
    gap: 20px;

    li {
      width: 100%;
      height: 450px;

      .port_content {
        padding: 20px;

        h3 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #000;
        }

        p {
          height: 50px;
          font-size: 16px;
          color: #000;
          margin-bottom: 20px;
          line-height: 24px;
        }

        .skill {
          height: 50px;
          margin-bottom: 30px;

          em {
            font-size: 16px;
            padding: 3px 7px;
          }
        }

        span {
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
  }
`;
export default PortfolioList;
