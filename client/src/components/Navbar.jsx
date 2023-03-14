import React from 'react';
import logo from '../assets/Logo.png';
import { ButtonPrimary } from '../Reusable';
import { NavLink, Link } from 'react-router-dom';
import '../../public/Styles/navBar.scss';

const Navbar = () => {
    return (
        <div >
            <div className="navBar">
                    <Link to={"/"} className="logo" >
                        <img src={logo} alt="Decode_Logo" />
                        <span>DECODE</span>
                    </Link>
                <div className="navLinks">
                    <ul>
                        <li>
                            <NavLink activeClassName='active' className='nav__link' to={"/about"} >About</NavLink>
                        </li>
                        <li>
                            <a className='nav__link'  >Questions</a>
                        </li>
                        <li>
                            <a className='nav__link'  >Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="ButtonSec">
                    <Link to={'/login'} className="login_button">LOGIN</Link>
                    <ButtonPrimary text="Start learning" to="/register" margin="0.5rem" height="6vh" padding="3vw" width="12vw" shadow="Shadow" name="NavBtn_Signup" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
