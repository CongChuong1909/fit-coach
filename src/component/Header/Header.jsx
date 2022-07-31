import React from 'react';
import './header.scss'
import Logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
function Header() {
    return (
        <div className='header' id='header'>
            <img src={Logo} alt="" className='header--logo'/>

            <ul className='header--menu'>
                <li>
                    <Link
                        to='header'
                        spy={true}
                        smooth = {true}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to='programs'
                        spy={true}
                        smooth = {true}
                    >
                        Programs
                    </Link>
                </li>
                <li>
                    <Link
                        to='reason'
                        spy={true}
                        smooth = {true}
                    >
                        Why us
                    </Link>
                </li>
                <li>
                    <Link
                        to='plans'
                        spy={true}
                        smooth = {true}
                    >
                        Plans
                    </Link>
                </li>
                <li>
                    <Link
                        to='testimonials'
                        spy={true}
                        smooth = {true}
                    >
                        Testimonials
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;