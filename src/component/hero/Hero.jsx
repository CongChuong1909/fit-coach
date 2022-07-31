import React from 'react';
import Header from '../Header/Header';
import './Hero.scss'
import heroImage from '../../assets/hero_image.png'
import heroImageBack from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
function Hero() {
    const transition = {type: 'spring', duration : 1}
    return (
        <div className='hero'>
            <div className="blur blur-h"></div>
            <div className='left--h'>
                <Header/>
                {/* the ad bar */}
                <div className='left--h_ad-bar'>
                    <motion.div
                        initial = {{left: '238px'}}
                        whileInView = {{left : '8px'}}
                        transition = {{...transition, type : 'tween'}} 
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* the title banner */}
                <div className='left--h_ad-heading'>
                    <div>
                        <span className='stroke'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>

                    <div className='left--h_ad-title'>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figures */}
                <div className='left--h__figures'>
                    <div>
                        <span><NumberCounter end = {140} start = {100} delay='3' preFix='+' /></span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span><NumberCounter end = {978} start = {800} delay='3' preFix='+' /></span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span><NumberCounter end = {50} start = {30} delay='3' preFix='+' /></span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* button */}
                <div className='left--h_banner-btn'>
                    <button className='btn'>Get Started</button>
                    <button className='btn' >Learn More</button>
                </div>
            </div>
            <div className='right--h'>
                {/* Join now */}
                <button className='btn '>Join Now</button>
                {/* Heart rase */}
                <motion.div 
                    className='right--h__heart-rase'
                    initial = {{right:'-1rem'}}
                    whileInView = {{right: '4rem'}}
                    transition = {{...transition, type : 'tween'}} 
                >
                    <img src={Heart} alt='' />
                    <span>Heart Rase</span><span>116bpm</span>
                </motion.div>

                {/* image */}
                <img src={heroImage} className='right--h__hero_image'   alt='' />
                <motion.img 
                    src={heroImageBack} 
                    className='right--h__hero_imageBack' 
                    alt='' 
                    initial = {{right:'11rem'}}
                    whileInView = {{right: '20rem'}}
                    transition = {{...transition, type : 'tween'}} 
                 />

                {/* calories */}

                <motion.div className="right--h__calories"
                    initial = {{right:'37rem'}}
                    whileInView = {{right: '28rem'}}
                    transition = {{...transition, type : 'tween'}} 
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;