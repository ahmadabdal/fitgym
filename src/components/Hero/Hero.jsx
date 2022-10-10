import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image1.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from 'framer-motion';
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: 'spring', duration: 3 }
  const mobile=window.innerWidth<=768 ?true: false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad  */}
        <div className="the-best-ad">
          <motion.div

            initial={{ left: mobile? "178px" :"238px" }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}

          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'> Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body </span>
          </div>
          <div>
            <span>IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR
              IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST</span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span> <NumberCounter end={96} start={50}
            delay='4' preFix="+"/></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>  <span> <NumberCounter end={786} start={500}
            delay='4' preFix="+"/></span></span>
            <span>members joined</span>
          </div>
          <div>
            <span>  <span> <NumberCounter end={69} start={40}
            delay='4' preFix="+"/></span></span>
            <span>fitness events</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="" />
          <span> Heart Rate</span>
          <span>120 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
      
         src={hero_image_back} alt="" className='hero-image-back' />
        {/* Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>

        </motion.div>
      </div >

    </div >





  )
}

export default Hero
