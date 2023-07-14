/** @format */

import React, { useEffect, useState } from "react";
import Wrapper from "./Navbar.styled";
import { Icon } from "@iconify/react";
import { NavHashLink } from "react-router-hash-link";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  // window resize hook
  useEffect(() => {
    // window size hook for sidenav
    function checkScreenSize() {
      if (window.innerWidth > 992) {
        setMobileMenu(false);
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [setMobileMenu]);

  // for mobile sidenav display
  useEffect(() => {
    const navContainer = document.querySelector(".nav-link-container");
    if (mobileMenu) {
      navContainer.style.height = 450 + "px";
    } else {
      navContainer.style.height = 0 + "px";
    }
  }, [mobileMenu]);

  // scroll function
  useEffect(() => {
    let navigation = document.querySelector("header");
    window.addEventListener("scroll", scrollFunc);

    function scrollFunc() {
      if (window.innerWidth) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          navigation.style.background = " #290b31";
        } else {
          navigation.style.background = "transparent";
        }
      } else {
        navigation.style.background = "#030b21";
      }
    }
  }, []);

  // scroll with offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <div className='nav-logo'>
        <h2>
          Mutant  Pirateverse
          {" "}
        </h2>{" "}
      </div>{" "}
      <div className='nav-link-container'>
        <ul>
          <li>
            <NavHashLink
              to='/#home'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              Home{" "}
            </NavHashLink>{" "}
          </li>{" "}
          <li>
            <NavHashLink
              to='/#about'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              About{" "}
            </NavHashLink>{" "}
          </li>{" "}
          <li>
            <NavHashLink
              to='/#story'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              Story
            </NavHashLink>
          </li>{" "}
          <li>
            <NavHashLink
              to='/#roadmap'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              Roadmap{" "}
            </NavHashLink>{" "}
          </li>{" "}
          <li>
            <NavHashLink
              to='/#team'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              Team{" "}
            </NavHashLink>{" "}
          </li>{" "}
          <li className='nav-link-last-item'>
            <NavHashLink
              to='/#faq'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              Faq 's{" "}
            </NavHashLink>{" "}
          </li>{" "}
          <li className='social-media-icon'>
            <a href='https://twitter.com/mutant_pirate'>
              <Icon icon='ant-design:twitter-outlined' />
            </a>{" "}
            <a href='#'>
              <Icon icon='akar-icons:discord-fill' />
            </a>{" "}
          </li>{" "}
          <li className='nav-button'>
            <li>
              <NavHashLink
                to='/#home'
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                }}>
                Mint Now{" "}
              </NavHashLink>{" "}
            </li>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
      <div className='mobile-menu'>
        <button
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}>
          {" "}
          {mobileMenu ? (
            <Icon icon='akar-icons:cross' />
          ) : (
            <Icon icon='uim:bars' />
          )}{" "}
        </button>{" "}
      </div>{" "}
    </Wrapper>
  );
}

export default Navbar;
