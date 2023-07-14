/** @format */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

import Layout from "../Components/Layout/Layout";

import Faq from "../Components/Faq/Faq";
import Roadmap from "../Components/Roadmap/Roadmap";
import Wrapper from "../Components/Banner/Banner.styled";

import Team from "../Components/Team/Team";
import About from "../Components/About/About";
import Story from "../Components/Story/Story";
import Nft from "../images/bannerNft.png";
import Nft2 from "../images/bannerNFT2.png";
import { Icon } from "@iconify/react";
function Home() {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  function decrementCounter() {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  }
  return (
    <Layout>
      <Wrapper>
        <div className='boxShadow'></div>
        <div className='homeBanner' id='home'>
          <div className='container'>
            <div className='col-md-12'>
              <div className='bannerText'>
                <h1>
                  Discover and collect your <br /> <span>Pirates Nft’s</span>
                </h1>
              </div>
            </div>
            <div className='row'>
              {/* right column start here */}
              <div className='col-md-6'>
                <div className='rightColumn'>
                  <div className='bannerImges'>
                    <img src={Nft} className='img-fluid' alt='crypto' />
                  </div>
                  <div className='bannerImges2'>
                    <img src={Nft2} className='img-fluid' alt='crypto' />
                  </div>
                </div>
              </div>

              {/* right column end here */}
              {/* first column start here */}
              <div className='col-md-6 bannerCol'>
                <div className='leftContentSingleItem'>
                  <div className='Content'>
                    <h4>How it started?</h4>
                    <p>
                      We have been in the market from the Past one Year. We have
                      seen Projects come and go but only a few have delivered on
                      their promises. So, the idea is to create something unique
                      with lots of utilities that will benefit our community for
                      the coming years. Having a MUTANT NFT is just not having
                      an NFT but actually being a part of an organic culture.
                      Which will increase the value of your NFT possession.
                    </p>
                  </div>
                  {/** Starting Dapp*/}
                  {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                    <>
                      <p>
                        The sale has ended.
                      </p>
                      {/* <p>
                  You can still find {CONFIG.NFT_NAME} on
                </p>
                 */}
                      {/* <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink> */}
                    </>
                  ) : (
                    <>
                      
                     

                      {blockchain.account === "" ||
                        blockchain.smartContract === null ? (
                        <div className="counter">
                          <div className="buttonGroup">
                            {/* <p style={{color: "#f7ba2d"}}>
                                1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                                {CONFIG.NETWORK.SYMBOL}.
                            </p> */}
                            <p
                              style={{
                                textAlign: "center",
                                color: "var(--accent-text)",
                                color: "#f7ba2d",
                              }}
                            >
                              Connect to the {CONFIG.NETWORK.NAME} network. (  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                                {CONFIG.NETWORK.SYMBOL}){'\n'}
                            </p>
                            {
                              (window.matchMedia("only screen and (max-width: 760px)").matches)?

                                <a href={CONFIG.DEEPLINK} 
                                style={{
                                  textAlign: "center",
                                  fontSize: '18px',
                                  color: "#f7ba2d",
                                  border: '1px solid rgba(0, 0, 0, 0.05)', 
                                  color: "white",
                                  cursor: "pointer",
                                  padding: "15px 32px",
                                }} 
                                >
                                    CONNECT
                                </a>
                                :
                                <button
                                  className="mintButton"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(connect());
                                    getData();
                                  }}
                                >
                                  CONNECT
                                </button>
                             }
                            {/* <button className='mintButton'
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(connect());
                                getData();
                              }}
                            >
                              CONNECT
                            </button> */}
                            {blockchain.errorMsg !== "" ? (
                              <>
                                <p  style={{
                                textAlign: "center",
                                color: "#f7ba2d",
                              }}>
                                  {blockchain.errorMsg}
                                </p>
                              </>
                            ) : null}
                          </div>
                        </div>
                      ) : (
                        <>
                          <p>
                            {feedback}
                          </p>
                          <div className="counter">
                            <div className="buttonGroup">
                              <button
                                className="fButton"
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                              >
                                <Icon icon='akar-icons:minus' />
                              </button>
                              <div className='inputField'>{mintAmount}</div>
                              <button
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                              >
                                <Icon icon='ant-design:plus-outlined' />
                              </button>
                            </div>

                            <div className="mintButton">
                              <button
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs();
                                  getData();
                                }}
                              >
                                {claimingNft ? "BUSY" : "BUY"}
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                  {/** Ending Dapp */}
                  {/* <div className='counter'>
                    <div className='buttonGroup'>
                      <button onClick={decrementCounter} className='fButton'>
                        <Icon icon='akar-icons:minus' />
                      </button>

                      <div className='inputField'>{counter}</div>
                      <button
                        onClick={() => {
                          setCounter(counter + 1);
                        }}>
                        <Icon icon='ant-design:plus-outlined' />
                      </button>
                    </div>
                    <div className='mintButton'>
                      <button>Mint Now</button>
                    </div>
                  </div> */}
                </div>
                <div className='boxShadow2'></div>
              </div>
              {/* first column end here */}
            </div>
          </div>
        </div>
      </Wrapper>
      <About />
      <Story />
      <Roadmap />

      <Team />

      <Faq />
    </Layout>
  );
}

export default Home;
