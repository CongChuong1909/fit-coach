import React from 'react';
import './testimonials.scss'
import {testimonialsData} from '../../data/testimonialsData'
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
function Testimonials() {
    const transition = {type: 'spring', duration : 1}
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length
    return (
        <div className='testimonials' id='testimonials'>
            <div className="left--t">
                <span>Testimonials</span>
                <span className='stroke'>What they</span>
                <span>Say about us</span>
                <motion.span
                    key={selected}
                    initial = {{opacity:0 , x:-100}}
                    animate = {{opacity:1 , x:0}}
                    exit = {{opacity:0 , x:100}}
                    transition = {{...transition, type : 'tween'}}
                >{testimonialsData[selected].review}</motion.span>
                <span>
                    <span>{testimonialsData[selected].name }</span>{" "} -
                    <span> {testimonialsData[selected].status }</span>
                </span>
            </div>
            <div className="right--t">
                <motion.div
                    initial = {{opacity:0 , x:-100}}
                    whileInView = {{opacity:1 , x:0}}
                    transition = {{...transition, type : 'tween'}} 
                ></motion.div>
                <motion.div
                    initial = {{opacity:0 , x:100}}
                    whileInView = {{opacity:1 , x:0}}
                    transition = {{...transition, type : 'tween'}}
                ></motion.div>
                <motion.img 
                    key={selected}
                    initial = {{opacity:0 , x:100}}
                    animate = {{opacity:1 , x:0}}
                    exit = {{opacity:0 , x:-100}}
                    transition = {{...transition, type : 'tween'}}
                    src={testimonialsData[selected].image} alt="" 
                />
                <div className="right--t_arrow">
                    <img  
                        onClick={() =>{
                            selected===0 ? setSelected(tLength - 1): setSelected(pre => pre - 1)
                        }}
                        src={leftArrow} 
                        alt="" 
                    />
                    <img 
                        onClick={() =>{
                            selected===tLength - 1 ? setSelected(0): setSelected(pre => pre + 1)
                        }}
                        src={rightArrow} 
                        alt="" />
                </div>
            </div>
        </div>
    );
}

export default Testimonials;