/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 0px;
  .row {
    justify-content: center;
  }
  .artButton {
    padding: 40px 0px 60px 0px;
  }
  .artButton h2 {
    color: white;
    font-size: 38px;
    font-weight: 500;
    color: #f9bc2d;
  }

  .swiperImg {
    overflow: visible;
  }
  .swiperImg img {
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    overflow: visible;
    box-shadow: -1px 0px 17px 0px rgba(210, 252, 43, 0.58);
    -webkit-box-shadow: -1px 0px 17px 0px rgba(210, 252, 43, 0.58);
    -moz-box-shadow: -1px 0px 17px 0px rgba(210, 252, 43, 0.58);
  }
  .swiperImg img:hover {
    transform: translateY(-10px);
  }
  .swiperContent {
    text-align: center;
    padding: 20px 0px;
  }
  .swiperContent h4 {
    margin-bottom: 20px;
    display: inline-block;
    border: 1px solid;
    padding: 10px 30px;
    border-radius: 35px;
    font-weight: 500;
    color: #f9bc2d;
  }
  .swiperContent p {
    font-size: 15px;
    line-height: 22px;
  }
  @media (max-width: 575.98px) {
    .swiperSlider {
      padding: 0px 15px;
    }
    .artButton h2 {
      font-size: 28px;
    }
  }
`;

export default Wrapper;
