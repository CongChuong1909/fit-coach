import React from 'react';
import './footer.scss'
import gitHub from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
function Footer() {
    return (
        <div className='footer' id='footer'>
            <hr />
            <div className="footer--socials">
                <div className="footer--socials-link">
                    <img src={gitHub} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                </div>
                <div className="footer--logo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f1"></div>
            <div className="blur blur-f2"></div>
        </div>
    );
}

export default Footer;