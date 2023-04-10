import React from "react";
import Image from "react-image-webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import styled from "styled-components";

interface PortShowProps {
  ProjectImg: string[];
  ProjectVideo: string[];
}

const SwiperImg = ({ ProjectImg, ProjectVideo }: PortShowProps) => {
  return (
    <SwiperWrap
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      pagination={true}
    >
      {ProjectVideo.map((videoImg, index) => {
        return (
          videoImg && (
            <SliderDiv key={index}>
              <video autoPlay muted loop height={500}>
                <source
                  src={`${process.env.PUBLIC_URL}/image/webp/${videoImg}`}
                  type="video/webm"
                />
              </video>
            </SliderDiv>
          )
        );
      })}

      {ProjectImg.map((item, index) => {
        return (
          ProjectImg && (
            <SliderDiv key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/image/webp/${item}`}
                alt={item}
              />
            </SliderDiv>
          )
        );
      })}
    </SwiperWrap>
  );
};

const SwiperWrap = styled(Swiper)`
  width: 100%;
  height: 500px;

  .swiper-pagination-bullet {
    background-color: #e1cef1;
    border: 1px solid rgb(169 124 207);
  }

  @media (max-width: 769px) {
    height: 250px;
  }
`;
const SliderDiv = styled(SwiperSlide)`
  background-color: #f9f9f9;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 100%;
  }
`;

export default SwiperImg;
