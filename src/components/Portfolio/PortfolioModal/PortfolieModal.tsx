import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { PortModalAtom, PortContentAtom } from '../../../store/StorePage'
import PortContentJson from '../portfolio_content.json'

import styled from 'styled-components'
/** modal_content는 모듈로 뺌 */
import styles from './styles.module.scss'

import close from '../../../assets/image/icon/close.svg'
import SwiperImg from './SwiperImg'

const PortfolieModal = () => {
  /** 모달 상태 */
  const [portModal, setPortModal] = useAtom(PortModalAtom)

  /** PortfoliioList 에서 클릭한 값 받아오기 */
  const [portContent, setPortContent] = useAtom(PortContentAtom)

  /** 데이터 기본 */
  const [portJson, setPortJson] = useState(PortContentJson)

  /** 클릭 값의 데이터 저장 */
  const [portShow, setPortShow] = useState(PortContentJson)

  /** 클릭 값 변경 될 때마다 데이터 변경하기 */
  useEffect(() => {
    setPortShow(portJson.filter(item => item.id === portContent))
  }, [portContent, portJson])

  /** 모달 닫기 */
  const handelPortModalClose = () => {
    setPortModal(false);
    document.body.style.overflow = "unset";
  }

  return (
    <>
      <ModalPort className={`${portModal ? 'open' : ''}`}>
        <div className="modal_wrap">
          <div className="modal_top">
            <button onClick={handelPortModalClose}>
              <img src={close} />
            </button>
            <em></em>
            <em></em>
          </div>

          {portShow.map(item => {
            return (
              <div className={styles.modal_content} key={item.id}>
                <h1>{item.project_name}</h1>

                <ul className={styles.content1}>
                  <li>
                    <span>업무포지션</span>
                    {item.position.map((po, index) => {
                      return <em key={index}>{po}</em>
                    })}
                  </li>

                  <li>
                    <span>사용언어</span>
                    {item.skill.map((sk, index) => {
                      return <em key={index}>{sk}</em>
                    })}
                  </li>

                  <li>
                    <span>프로젝트 기간</span>
                    <span>{item.date}</span>
                  </li>

                  {/* git 링크 없으면 보이지 않게 */}
                  {item.giturl ? (
                    <li>
                      <span>GitUrl</span>
                      <Link to={item.giturl} target="_blank">
                        Git 소스 보러 가기
                      </Link>
                    </li>
                  ) : (
                    ''
                  )}
                </ul>

                {/* 프로젝트 이미지 슬라이더 */}
                <SwiperImg
                  ProjectImg={item.project_img}
                  ProjectVideo={item.project_video}
                />

                <div className={styles.project_txt}>
                  <h3>프로젝트를 시작하기 전 고려한 점</h3>
                  <p>{item.project_think}</p>
                  {item.figmaurl && (
                    <Link to={item.figmaurl}>Figma 디자인 보러가기</Link>
                  )}
                </div>

                <div className={styles.project_txt}>
                  <h3>프로젝트의 진행과 결과</h3>
                  <p>{item.project_result}</p>
                </div>

                <ol>
                  {item.etc_imgs &&
                    item.etc_imgs.map((etc, index) => {
                      return (
                        <li key={index}>
                          <picture>
                            <source
                              srcSet={`${process.env.PUBLIC_URL}/image/webp/${etc}.webp`}
                              type="image/webp"
                            />

                            <img
                              src={`${process.env.PUBLIC_URL}/image/${etc}.jpg`}
                              alt={etc}
                            />

                            <img
                              src={`${process.env.PUBLIC_URL}/image/${etc}.png`}
                              alt={etc}
                            />
                          </picture>
                        </li>
                      )
                    })}
                </ol>
              </div>
            )
          })}
        </div>
      </ModalPort>

      {/* 모달 검은 배경 */}
      {portModal && <ModalBg onClick={handelPortModalClose}></ModalBg>}
    </>
  )
}

const ModalPort = styled.div`
  overflow: hidden;
  border: 2px solid #000;
  background: #fff;

  position: fixed;
  display: none;

  z-index: 2;

  &.open {
    display: block;
  }

  .modal_wrap {
    height: 100%;
  }

  .modal_top {
    width: calc(100% - 10px);
    height: 25px;
    border-bottom: 2px solid #000;

    display: flex;
    align-items: center;

    gap: 5px;

    button {
      width: 15px;
      height: 15px;
      border-radius: 15px;
      background: #f21919;

      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 7px;
        height: 7px;

        display: none;
      }

      &:hover {
        img {
          display: block;
        }
      }
    }

    em {
      width: 15px;
      height: 15px;
      border-radius: 15px;
      background-color: #aaa;

      &:last-child {
        background-color: rgb(48 204 56);
      }
    }
  }

  @media (min-width: 1024px) {
    width: 80%;
    height: 80%;

    left: 10%;
    top: 10%;

    .modal_top {
      justify-content: start;
      padding-left: 10px;
    }
  }

  @media (max-width: 1023px) and (min-width: 769px) {
    width: 90%;
    height: 80%;

    left: 5%;
    top: 10%;

    .modal_top {
      justify-content: end;
      flex-direction: row-reverse;

      padding-right: 10px;
    }
  }

  @media (max-width: 769px) {
    width: 90%;
    height: 80%;

    left: 5%;
    top: 10%;

    .modal_top {
      width: calc(100% - 10px);
      height: 25px;
      border-bottom: 2px solid #000;

      display: flex;
      justify-content: end;
      align-items: center;
      flex-direction: row-reverse;
      gap: 5px;

      padding-right: 10px;
    }
  }
`

const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;
`

export default PortfolieModal
