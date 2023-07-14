/** @format */
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  .homeBanner {
    padding: 140px 0px 70px 0px;
  }
  .col-md-6 {
    position: relative;
  }
  .bannerText {
    padding-top: 40px;
    padding-bottom: 20px;
    text-align: center;
  }
  .bannerText h1 {
    font-size: 48px;

    font-weight: 500;
  }
  .bannerText h1 span {
    color: #f7ba2d;
  }
  .leftContentSingleItem {
    position: relative;
    z-index: 95;
  }
  .bannerCol {
    display: flex;
    align-items: center;
  }
  .boxShadow {
    position: absolute;
    width: 390px;
    height: 280px;
    top: -80px;
    left: -30px;
    filter: blur(110px);
    box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    -webkit-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
  }
  .boxShadow2 {
    position: absolute;
    width: 50px;
    height: 350px;
    top: -80px;
    left: auto;
    -webkit-filter: blur(110px);
    filter: blur(110px);
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
    right: 0;
    top: auto;
    bottom: 0;
  }
  .Content {
  }
  .Content h4 {
    font-size: 41px;
    line-height: 60px;
    font-weight: 400;
    color: #f7ba2d;
  }
  .Content p {
    font-weight: 300;
  }

  .counter {
    left: -15px;
    display: flex;
    margin: 30px 0px 20px 0px;
    position: relative;
    left: -15px;
  }
  .buttonGroup {
    display: flex;
    align-items: center;
  }
  .counter button {
    padding: 4px 15px;
    font-size: 19px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: transparent;
    color: white;
    border: 1px solid #f9bc2d;
    cursor: pointer;
    background-color: transparent;

    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    border-radius: 5px;
    height: 45px;
  }

  /* .counter button:hover {
    background-color: transparent;
    border: 1px solid #1c51fe;
    color: white;
  } */
  .inputField {
    width: 120px;
    text-align: center;
    height: 45px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;

    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #f9bc2d;
    margin: 0px 20px;
  }
  .mintButton {
    margin-left: 30px;
  }
  .mintButton button {
    border: 0;
    padding: 13px 40px;
    font-size: 20px;
    color: white;
    background-color: #f9bc2d;
    cursor: pointer;
    border-radius: 0px;
    border: 1px solid #f9bc2d;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    margin-left: 0px;
  }
  .mintButton button:hover {
    background-color: transparent;
    border: 1px solid #f9bc2d;
    color: #f9bc2d;
  }
  .rightColumn {
    display: grid;
    grid-template-columns: 5fr 4fr;
    align-items: center;
    position: relative;
    z-index: 95;
  }
  .boxshadow2 {
    position: absolute;
    bottom: 30px;
    right: -80px;
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    width: 210px;
    height: 240px;
    filter: blur(111px);
    z-index: -2;
  }
  .bannerImges {
    text-align: center;
  }
  .bannerImges img {
    width: 80%;
    border-radius: 20px;
    cursor: pointer;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    overflow: hidden;
    border-radius: 130px;
    height: 380px;
    object-fit: cover;
    box-shadow: -1px 0px 50px 3px rgb(242 196 49 / 75%);
    -webkit-box-shadow: -1px 0px 19px 3px rgb(242 196 49 / 75%);
    -moz-box-shadow: -1px 0px 50px 3px rgba(242, 196, 49, 0.75);
  }
  .bannerImges img:hover {
    transform: translateY(-10px);
  }
  .bannerImges2 {
    position: absolute;
    right: 0;
    z-index: -5;
    transform: translate(-20px, 0px);
  }
  .bannerImges2 img {
    width: 80%;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    overflow: hidden;
    box-shadow: -1px 0px 20px 3px rgba(122, 81, 179, 0.75);
    -webkit-box-shadow: -1px 0px 20px 3px rgba(122, 81, 179, 0.75);
    -moz-box-shadow: -1px 0px 20px 3px rgba(122, 81, 179, 0.75);
  }
  .bannerImges2 img:last-child {
    border-radius: 120px;
    height: 320px;
    object-fit: cover;
  }
  .bannerImges2 img:hover {
    transform: translateX(10px);
  }
  @media (max-width: 575.98px) {
    .bannerText {
      margin-top: 90px;
    }
    .bannerText h1 {
      font-size: 28px;

      margin-bottom: 20px;
    }
    .homeBanner {
      padding: 50px 0px;
    }

    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .bannerImges img {
      width: 70%;
    }
    .Content {
      text-align: center;
    }
    .Content h4 {
      font-size: 29px;
      line-height: 36px;
    }

    .counter {
      display: block;
    }
    .mintButton {
      text-align: center;
    }
    .leftContentSingleItem {
      margin-top: 30px;
    }
    .boxShadow {
      width: 270px;
      height: 280px;

      left: 0;
    }
    .boxshadow2 {
      right: 0;

      width: 210px;
      height: 240px;
    }
    .bannerImges2 {
      position: absolute;
      right: 10px;

      left: 45%;
    }

    .bannerImges img {
      height: 220px;
    }
    .bannerImges2 img:last-child {
      height: 180px;
    }
    .buttonGroup {
      justify-content: center;
    }
    .mintButton {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .bannerText h1 {
      font-size: 38px;
    }
    .bannerText {
      padding-top: 10px;
      padding-bottom: 60px;
    }
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .bannerImges img {
      width: 70%;
      height: 280px;
    }
    .Content h4 {
      font-size: 40px;
    }
    .counter {
      justify-content: center;
    }
    .mintButton {
      text-align: center;
    }
    .leftContentSingleItem {
      margin: 0 auto;
      padding-top: 40px;
    }
    .Content h4 {
      font-size: 36px;
      line-height: 41px;
      text-align: center;
    }
    .boxshadow2 {
      right: 0px;
    }
    .counter {
      display: flex;
      justify-content: center;
    }
    .mintButton button {
      margin-left: 0px;
      margin-top: 0px;
    }
    .bannerImges2 {
      position: absolute;
      left: 0%;
      right: auto;
      -webkit-transform: translate(-20px, 0px);
      -ms-transform: translate(-20px, 0px);
      transform: translate(95%, 0px);
    }

    .bannerImges2 img:last-child {
      border-radius: 80px;
      height: 230px;
      object-fit: cover;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .Content h4 {
      font-size: 36px;
      line-height: 41px;
    }
    .boxshadow2 {
      right: 0px;
    }
    .counter {
      display: block;
    }
    .mintButton button {
      margin-left: 14px;
      margin-top: 30px;
    }
    .bannerImges img {
      height: 230px;
    }
    .bannerImges2 img:last-child {
      border-radius: 80px;
      height: 190px;
      object-fit: cover;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .boxshadow2 {
      right: 0px;
    }
  }
`;

export default Wrapper;
