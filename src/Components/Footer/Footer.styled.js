/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  footer {
    border-top: 1px solid white;
    text-align: center;
    padding: 50px 0px;
  }
  .footer-title {
    p {
      font-family: Black_Rose;
      font-size: 32px;
      font-weight: 500;
      color: #ffffff;
      @media (max-width: 575px) {
        font-size: 28px;
      }
    }
  }
  .footer-social-icons {
    font-size: 25px;
    padding-top: 20px;
    a {
      margin: 0 15px;
      text-decoration: none;
      color: white;
      display: inline-block;
      transition: 0.5s ease-in-out;
      :hover {
        transform: translateY(-10px);
        color: #f9bc2d;
      }
    }
  }
  .copy {
  }
  .copy p {
    color: #babfbf;
  }
`;

export default Wrapper;
