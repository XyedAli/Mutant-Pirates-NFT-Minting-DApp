/** @format */

import React from "react";
import { useState } from "react";
import Wrapper from "./About.styled";
import ChapterImg from "../../images/chapter.png";
function About() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <Wrapper id='about'>
      <div className='container spaxe'>
        <div className='row'>
          {/* single item start here */}
          <div className='col-md-4'>
            <div className='leftSIngleItem'>
              <div className='ChapterImg'>
                <img src={ChapterImg} className='img-fluid' alt='' />
              </div>
              <div className='boxShadow'></div>
            </div>
          </div>
          {/* single item end here */}
          {/* right item start here */}
          <div className='col-md-8 rightItem'>
            <div className='bloc-tabs'>
              <div className='chapterContent'>
                <h2>Chahpter</h2>
              </div>
              <div className='chapterBUtton'>
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}>
                  1
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}>
                  2
                </button>
                <button
                  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(3)}>
                  3
                </button>
              </div>
            </div>

            <div className='content-tabs'>
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }>
                <div className='tabContent'>
                  <p>
                    A Project focused on building a strong Community, With the
                    Quest to Help each Other Achieve Our Financial Goals. You
                    get the Chance to get our original <span style={{fontSize:'30px'}}> 3333</span> MUTANT PIRATE
                    COLLECTION, PHASE <span style={{fontSize:'30px'}}> 1</span>.
                  </p>
                </div>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }>
                <p>
                  Having the MUTANT NFT, Will make You whitelisted For the
                  Second Mutant Pirates Collection and have the opportunity to
                  own One.
                </p>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }>
                <p>
                  By holding both a PHASE <span style={{fontSize:'30px'}}> 1</span> and PHASE <span style={{fontSize:'30px'}}> 2</span> pirate, Will again make
                  You Whitelisted To mint Our Devil Pirate Collection. And
                  Having All 3 Pirates will make sure that You gain the most
                  rewards and benefits.
                </p>
              </div>
            </div>
            <div className='boxShadow2'></div>
          </div>
          {/* right item end here */}
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
