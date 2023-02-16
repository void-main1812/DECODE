import React from 'react'
import logo from '../assets/Logo.png'
import NavBar from '../json/navBar.json';
import { ButtonPrimary } from '../Reusable';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../public/Styles/navBar.scss'

const Navbar = () => {
    return (
        <motion.div initial={{y:-80, opacity:0}} animate={{y:0, opacity:1, transition:{delay:0.2, duration:0.5}}} exit={{opacity:0, transition:{duration:0.3}}}>
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
                                            <a href="#">{navbar.title}</a>
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
        </motion.div>
    )
}

export default Navbar
