/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 80px 0px;
  .offsetMiddle {
    margin-left: 15%;
  }
  .row {
    position: relative;
  }
  .col-md-6 {
    flex: 0 0 70%;
    max-width: 70%;
  }

  .boxShadow {
    position: absolute;
    width: 50px;
    height: 720px;

    left: 0;
    -webkit-filter: blur(110px);
    filter: blur(110px);
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
    right: auto;
    top: 15%;
    bottom: auto;
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

  .commonItem {
    margin-bottom: 20px;
  }
  .roadmapTitle {
  }
  .roadmapTitle h1 {
    text-transform: uppercase;
    color: #f9bc2d;
    font-size: 38px;
    margin: 70px 0px 40px 0px;
  }

  .desc {
    background: #481955;
    padding: 20px 30px;
    border-radius: 8px;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
  .desc:hover {
    box-shadow: 1px 6px 24px 3px rgba(237, 250, 63, 0.75);
    -webkit-box-shadow: 1px 6px 24px 3px rgba(237, 250, 63, 0.75);
    -moz-box-shadow: 1px 6px 24px 3px rgba(237, 250, 63, 0.75);
  }

  .desc p {
    font-size: 18px;
    line-height: 34px;
    margin-top: 20px;
  }
  @media (max-width: 575.98px) {
    .roadmapTitle h1 {
      font-size: 28px;
    }

    .offsetMiddle {
      margin-left: 5%;
    }
    .col-md-6 {
      flex: 0 0 90%;
      max-width: 90%;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .title h3 {
      font-size: 23px;
    }
    .offsetMiddle {
      margin-left: 10%;
    }
    .col-md-6 {
      flex: 0 0 80%;
      max-width: 80%;
    }
  }
`;

export default Wrapper;
