/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .leftSIngleItem {
  }
  .col-md-8 {
    position: relative;
  }

  .boxShadow2 {
    position: absolute;
    width: 50px;
    height: 150px;
    top: -80px;
    left: auto;
    -webkit-filter: blur(110px);
    filter: blur(58px);
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px #601b72;
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;

    right: 0;
    top: auto;
    bottom: 0;
  }
  .ChapterImg {
    text-align: center;
  }
  .ChapterImg img {
    width: 90%;
    border-radius: 10px;
    box-shadow: -1px 0px 20px 4px rgba(210, 252, 43, 0.75);
    -webkit-box-shadow: -1px 0px 20px 4px rgba(210, 252, 43, 0.75);
    -moz-box-shadow: -1px 0px 20px 4px rgba(210, 252, 43, 0.75);
    transition: 0.5s ease-in-out;
    overflow: hidden;
    cursor: pointer;
  }
  .ChapterImg img:hover {
    transform: scale(1.1);
  }
  .rightItem {
    padding-left: 30px;
  }
  .chapterContent {
  }
  .chapterContent h2 {
    font-weight: 500;
    font-size: 27px;
    border: 1px solid #f9bc2d;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 207px;
    border-radius: 25px;
    margin-right: 30px;
  }
  .chapterBUtton {
  }
  .bloc-tabs {
    display: grid;
    grid-template-columns: 2fr 8fr;
    margin-bottom: 30px;
    align-items: center;
  }
  .tabs {
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0px 20px 0px 0px;
  }

  .active-tabs {
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
  .content {
    padding: 0px;
    width: 100%;
    height: 100%;
    display: none;
  }
  .tabContent {
    padding-right: 50px;
  }

  .content p {
    width: 100%;
    height: 100%;
    font-size: 23px;
    line-height: 36px;
  }
  .active-content {
    display: block;
  }
  @media (max-width: 767px) {
    .col-md-4,
    .col-md-8 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (max-width: 575.98px) {
    .bloc-tabs {
      margin-top: 60px;
      display: block;
    }
    .content p {
      font-size: 15px;
      line-height: 29px;
    }
    .chapterBUtton {
      margin-top: 30px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .ChapterImg img {
      width: 60%;
    }
    .bloc-tabs {
      margin-top: 60px;
    }
    .content p {
      font-size: 15px;
      line-height: 29px;
    }
  }
`;

export default Wrapper;
