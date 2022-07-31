import React from 'react';
import './plans.scss'
import {plansData} from '../../data/plansData'
import whiteTick from'../../assets/whiteTick.png'
function Plans() {
    return (
            <div className="plans">
                <div className="blur blur-b1"></div>
                <div className="blur blur-b2"></div>
                {/* plans header */}
                <div className="plans--header">
                    <span className='stroke'>Ready to start</span>
                    <span>Your journey</span>
                    <span className='stroke'>Now withus</span>
                </div>
                {/* plans card */}
                <div className="plans--card">
                    {plansData.map((plan,index) =>(
                        <div className="plans--card_data" key={index}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className="plans--card_data-features">
                                {plan.features.map((feature,index) =>(
                                    <div key={index} className="plans--card_data-features-item">
                                        <img src={whiteTick} alt="" />
                                        <span key={index}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <span>See more benefits -&gt;    </span>
                            </div>
                            <button className='btn'>Join now</button>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default Plans;