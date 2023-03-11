import React from 'react'
import logo from '../assets/Logo.png'
import NavBar from '../json/navBar.json';
import { ButtonPrimary } from '../Reusable';
import { NavLink, Link } from 'react-router-dom';
import '../../public/Styles/navBar.scss'

const Navbar = () => {
    return (
        <div >
            <div className="navBar">
                <div className="logoSec">
                    <img src={logo} alt="Decode_Logo" />
                    <span>DECODE</span>
                </div>
                <div className="navLinks">
                    {
                        NavBar.map(
                            navbar => {
                                return (
                                    <ul>
                                        <li>
                                            <NavLink to={navbar.link} activeClassName="active" >{navbar.title}</NavLink>
                                        </li>
                                    </ul>
                                )
                            }
                        )
                    }
                </div>
                <div className="ButtonSec">
                    <Link to={'/login'} className="login_button">LOGIN</Link>
                    <ButtonPrimary text="Start learning" to="/register" margin="0.5rem" height="6vh" padding="3vw" width="12vw" shadow="Shadow" name="NavBtn_Signup" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
