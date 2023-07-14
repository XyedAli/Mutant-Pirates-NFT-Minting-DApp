/** @format */

import React from "react";
import { useState } from "react";
import Wrapper from "./Faq.styled";

function Faq() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  function handleAccordion(e) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  function handleAccordion2(e) {
    e.target.classList.toggle("active");
    let panel2 = e.target.nextElementSibling;
    if (panel2.style.maxHeight) {
      panel2.style.maxHeight = null;
    } else {
      panel2.style.maxHeight = panel2.scrollHeight + "px";
    }
  }
  return (
    <Wrapper id='faq'>
      <div className='container'>
        <div className='teamTitle'>
          <h3>PIRATEVERSE FAQ</h3>
        </div>
        <div className='row'>
          {/* right item start here */}
          <div className='col-md-12 '>
            <div className='bloc-tabs'>
              <button
                className={
                  toggleState === 1 ? "tabs active-tabs     " : "tabs "
                }
                onClick={() => toggleTab(1)}>
                Q 1-5
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs " : "tabs"}
                onClick={() => toggleTab(2)}>
                Q 6-10
              </button>
            </div>

            <div className='content-tabs'>
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }>
                <div>
                  <div className='singleItemPanle'>
                    <div className='accordion-container'>
                      <button
                        className='accordion-item'
                        onClick={handleAccordion}>
                        How Was MUTANT Pirate NFT Generated?
                      </button>
                      <div className='panel'>
                        <p>
                          Our Team has been working closely since the last 6
                          months to bring Forward an NFT Project that would
                          change the game.ALL Generated Art has been given time
                          to be hand drawn and approved by our creative
                          designers.
                        </p>
                      </div>
                    </div>
                    <div className='accordion-container'>
                      <button
                        className='accordion-item'
                        onClick={handleAccordion}>
                        What is the supply of First Mutant Pirates?
                      </button>
                      <div className='panel'>
                        <p>THERE IS A CAP OF <span style={{fontSize:'25px'}}> 3333</span>  MUTANT Pirates.</p>
                      </div>
                    </div>

                    <div className='accordion-container'>
                      <button
                        className='accordion-item'
                        onClick={handleAccordion}>
                        WHY 3333 MUTANT Pirates and Not More?
                      </button>
                      <div className='panel'>
                        <p>
                          We Just don’t want to work with quantity but We want
                          justified quality to our NFT. We want to deliver
                          according to our UTILITY MAP as We Want Our NFT
                          holders to have an EXCLUSIVE NFT.
                        </p>
                      </div>
                    </div>

                    <div className='accordion-container'>
                      <button
                        className='accordion-item'
                        onClick={handleAccordion}>
                        What does Mint mean?
                      </button>
                      <div className='panel'>
                        <p>
                          NFT Minting is the process by which your digital art
                          or digital content becomes a part of the Ethereum
                          blockchain.
                        </p>
                      </div>
                    </div>

                    <div className='accordion-container'>
                      <button
                        className='accordion-item'
                        onClick={handleAccordion}>
                        What is the mint price of FIRST COLLECTION OF Mutant
                        Pirate NFT?
                      </button>
                      <div className='panel'>
                        <p>
                          Public: <span style={{fontSize:'20px'}}> 0.55 ETH</span> 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='content-tabs'>
              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }>
                <div>
                  <div className='singleItemPanle'>
                    <div className='accordion-container'>
                      <button
                        className='accordion-item'
                        onClick={handleAccordion2}>
                        When Can I see My NFT?
                      </button>
                      <div className='panel'>
                        <p>
                          The reveal will Happen in 48 hours of the completion
                          of minting.
                        </p>
                      </div>
                    </div>
                    <div className='accordion-container'>
                      <button
                        className='accordion-item'
                        onClick={handleAccordion2}>
                        What Is There for the NFT Holders After Minting?
                      </button>
                      <div className='panel'>
                        <p>
                          Once You mint the First Mutant Collection then You
                          will be whitelisted for our second Collection and once
                          You mint the second collection then You will Be
                          whitelisted for the third Collection.
                        </p>
                      </div>
                    </div>

                    <div className='accordion-container'>
                      <button
                        className='accordion-item'
                        onClick={handleAccordion2}>
                        This PROJECT is amazing. Where can I be more connected
                        to the team?
                      </button>
                      <div className='panel'>
                        <p>
                          You can join Our twitter page and community Discord,
                          where all Your valuable questions will be answered.
                        </p>
                      </div>
                    </div>

                    <div className='accordion-container'>
                      <button
                        className='accordion-item'
                        onClick={handleAccordion2}>
                        Where does my NFT REFLECT ONCE I GET A Mutant Pirate?
                      </button>
                      <div className='panel'>
                        <p>
                          Your Mutant NFT will be available in the address or
                          connected wallet you used to purchase the Mutant NFT,
                          it is registered and stored in the Ethereum Blockchain
                          immediately, that specific transaction and
                          marketplaces like Opensea will display your purchased
                          NFT in your specific account.
                        </p>
                      </div>
                    </div>

                    <div className='accordion-container'>
                      <button
                        className='accordion-item'
                        onClick={handleAccordion2}>
                        WHO IS BEHIND THE PROJECT?
                      </button>
                      <div className='panel'>
                        <p>
                          We are a team of Marketing Experts, Animators, Digital
                          Designers, Devs, crypto and NFT Specialists who have
                          been in the game since 2016. We have a team which is
                          well versed in their fields. After RND of multiple
                          years backing us, our project focus is of creating a
                          strong community that simply believes in for mantra OF
                          THE PEOPLE, BY THE PEOPLE AND FOR THE PEOPLE.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right item end here */}
          <div className='boxShadow'></div>
          <div className='boxShadow2'></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Faq;
