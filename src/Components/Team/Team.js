/** @format */

import React from "react";
import Wrapper from "./Team.styled";



// images
import TeamImg from "../../images/team1.png";
import TeamImg2 from "../../images/team2.png";
import TeamImg3 from "../../images/team3.png";
import TeamImg4 from "../../images/team4.png";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

function Team() {
  return (
    <Wrapper>
      <div className='container' id='team'>
        <div className='artButton'>
          <h2>PIRATEVERSE TEAM</h2>
        </div>
        <div className='row swiperSlider'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              120: {
                slidesPerView: 1,
              },
              390: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
            className='mySwiper'>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={TeamImg} className='img-fluid' alt='' />

                <div className='swiperContent'>
                  <h4>CAPTAIN</h4>

                  <p>IS THE VISONARY AND THE DIRECTOR OF THE WHOLE PROJECT.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={TeamImg2} className='img-fluid' alt='' />

                <div className='swiperContent'>
                  <h4>QUATERMASTER</h4>

                  <p>
                    IS THE ADMINISTRATOR AND MAINTAIN'S THE UTILITY MAP SHOULD
                    BE MET WITH WITHIN THE TIMEFRAME
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={TeamImg3} className='img-fluid' alt='' />
                <div className='swiperContent'>
                  <h4>BOATSWAIN</h4>

                  <p>
                    DIVIDES THE WORK FLOW AMONGST THE CREW. THEY ARE
                    RESPONSIBLE FOR PROVIDING INFORMATION, HELP IN OVERCOMING
                    OBSTACLES OF THE PROJECT.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiperImg'>
                <img src={TeamImg4} className='img-fluid' alt='' />
                <div className='swiperContent'>
                  <h4>CARPENTER</h4>

                  <p>
                    WHO MAKES SURE THE DESIGN MODEL MATCHES THE UTILITY,
                    MAINTAINING THE ETHENICITY OF THE PROJECT
                  </p>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
}

export default Team;
