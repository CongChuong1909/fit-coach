import React from 'react';
import './programs.scss'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
function Programs() {
    return (
        <div className='programs' id='programs'>
            {/* header */}
            <div className="programs--header">
                <span className='stroke'>Exlore our </span>
                <span>programs </span>
                <span className='stroke'>to shape you</span>
            </div>
            <div className="programs--categories">
                {programsData.map((program, index)=>(
                        <div key={index} className="programs--categories_item">
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className="programs--categories_item-join-now">
                                <span>Join Now</span>
                                <img src={RightArrow} alt="" />
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
}

export default Programs;