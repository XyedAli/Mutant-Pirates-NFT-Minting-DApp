/** @format */

import styled from "styled-components";

import FaqImg from "../../images/faq.png";

const Wrapper = styled.div`
  padding: 50px 0px;
  .row {
    position: relative;
    justify-content: center;
  }
  .leftSIngleItem {
    position: relative;
  }
  .leftContent {
  }
  .teamTitle {
    padding-bottom: 60px;
  }
  .teamTitle h3 {
    font-size: 38px;
    font-weight: 500;
    color: #f9bc2d;
  }
  .boxShadow {
    position: absolute;
    width: 190px;
    height: 170px;
    top: 70;
    left: 0;
    -webkit-filter: blur(110px);
    filter: blur(90px);
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
  }
  .leftContent h2 {
    font-size: 49px;
    font-weight: 600;
  }
  .bloc-tabs {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: center;
    margin-bottom: 30px;
    column-gap: 40px;
  }
  .tabs {
    padding: 14px 40px;
    text-align: center;
    background: transparent;
    cursor: pointer;
    box-sizing: content-box;
    position: relative;
    outline: none;
    color: #f9bc2d;
    border: 1px solid #f9bc2d;
    border-radius: 35px;
    font-size: 22px;
  }

  .boxShadow {
    position: absolute;
    width: 50px;
    height: 120px;

    left: 0;
    -webkit-filter: blur(110px);
    filter: blur(110px);
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
    right: auto;
    top: 0;
    bottom: auto;
  }

  .boxShadow2 {
    position: absolute;
    width: 50px;
    height: 80px;
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
  .active-tabs {
    background: #f9bc2d;
    color: white;
    border: 1px solid #f9bc2d;
  }
  .tabs2 {
    padding: 15px 15px;
    text-align: center;
    background: transparent;
    cursor: pointer;
    box-sizing: content-box;
    position: relative;
    outline: none;

    color: #f9bc2d;
    border: 1px solid #f9bc2d;
    border-radius: 5px;
    font-size: 22px;
    border-radius: 50%;
    margin: 0px 11px;
  }

  .active-tabs2 {
    background: #f9bc2d;
    color: white;
    border: 1px solid #f9bc2d;
  }

  button {
    border: none;
    transition: 0.5s ease-in-out;
  }
  button :hover {
    transform: translateY(-10px);
  }
  .content-tabs {
    flex-grow: 1;
  }
  .content-tabs2 {
    flex-grow: 1;
  }
  .content {
    padding: 0px;
    width: 100%;
    height: 100%;
    display: none;
  }
  .content2 {
    padding: 0px;
    width: 100%;
    height: 100%;
    display: none;
  }
  .content h2 {
    padding: 0px 0 5px 0px;
  }

  .content p {
    width: 100%;
    height: 100%;
  }
  .active-content {
    display: block;
  }
  .active-content2 {
    display: block;
  }
  ul {
    margin-top: 10px;
  }
  ul li {
    list-style: lower-roman;
    margin-bottom: 8px;
  }
  .nestedToggle {
    text-align: center;
  }
  @media (max-width: 575.98px) {
    .col-md-8,
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .leftContent h2 {
      font-size: 39px;

      text-align: center;
    }
    .tabs {
      padding: 10px 14px;
      margin-bottom: 20px;
      font-size: 13px;
    }
    .bloc-tabs {
      margin-top: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      column-gap: 9px;

      padding: 0px 15px;
    }
    .content-tabs {
      padding: 0px 15px;
    }
    .content {
      padding: 0px;
    }
  }
  .singleItemPanle {
    background-color: #481955;
    padding: 30px 20px;
    border-radius: 8px;
    margin-top: 40px;
    -webkit-flex: 0 0 50%;
    -ms-flex: 0 0 50%;
    flex: 0 0 70%;
    max-width: 70%;
    margin-left: 15%;
  }
  .singleItemPanle-active {
    display: block;
  }
  @media (max-width: 575px) {
    .singleItemPanle {
      flex: 0 0 90%;
      max-width: 96%;
      margin-left: 2%;
    }
    .teamTitle h3 {
      font-size: 28px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .col-md-8,
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .leftContent h2 {
      font-size: 39px;

      text-align: center;
    }
    .tabs {
      font-size: 17px;
    }
    .bloc-tabs {
      margin-top: 40px;
    }
    .singleItemPanle {
      flex: 0 0 80%;
      max-width: 80%;
      margin-left: 10%;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .leftContent h2 {
      font-size: 32px;
    }
    .tabs {
      padding: 8px 14px;

      font-size: 17px;
    }
    .singleItemPanle {
      flex: 0 0 70%;
      max-width: 70%;
      margin-left: 15%;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .leftContent h2 {
      font-size: 42px;
    }
  }

  .accordion-container {
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 5px;
    padding: 0 0px;

    transition: 0.5s ease-out;

    @media (max-width: 768px) {
      padding: 0 20px;
    }
    .accordion-container:last-child {
      margin-bottom: 0px;
    }
    .accordion-item {
      background: transparent;
      color: #fff;
      cursor: pointer;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 20px;
      font-weight: 600;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      padding: 20px 0;
      padding-left: 60px;
      font-family: Black_Rose;
      font-weight: 500;
      color: #f9bc2d;
      position: relative;
      @media (max-width: 600px) {
        font-size: 16px;
        padding-left: 40px;
      }
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        left: 0;
        background: url(${FaqImg});
        transform: translateY(-50%);
      }
    }
    .active {
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);
        background: url(${FaqImg});
      }
    }
    .panel {
      background: transparent;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      p {
        border-radius: 5px;
        padding: 20px 0px;

        border-radius: 0;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
        padding-left: 60px;
        @media (max-width: 600px) {
          font-size: 15px;
          padding-left: 40px;
        }
      }
    }
  }
`;
export default Wrapper;
