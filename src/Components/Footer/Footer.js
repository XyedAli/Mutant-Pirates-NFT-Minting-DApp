/** @format */

import React from "react";
import Wrapper from "./Footer.styled";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <Wrapper>
      <footer>
        <div className='footer-title'>
          <p>MUTANT PIRATEVERSE</p>
        </div>
        <div className='footer-social-icons'>
          <a href='https://twitter.com/mutant_pirate'>
            <Icon icon='ant-design:twitter-outlined' />
          </a>
          <a href='#'>
            <Icon icon='akar-icons:discord-fill' />
          </a>
        </div>
        <div className='copy'>
          <p>copyright @MUTANT PIRATEVERSE</p>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;
