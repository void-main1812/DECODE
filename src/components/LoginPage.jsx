import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/login.scss'
import { BlurBlobs, ButtonPrimary } from '../Reusable'
import google from "../assets/google.webp";
import github from "../assets/github.png";
import discord from "../assets/discord.png";
import { motion } from 'framer-motion';



const LoginPage = () => {

  // setting variable to show or hide password

  const [isVisible, setIsVisible] = useState(false);

  function password() {
    setIsVisible(!isVisible);
  }

  return (
    <motion.div initial={{ height: '100vh' }}>
      {/* top cancel & register button */}
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5 } }} exit={{ opacity: 0, transition: { duration: 0.2 } }} className="topNav">
        <Link to={'/'} className="back" >cancel<i class='bx bx-right-arrow-alt' undefined ></i></Link>
        <Link to={'/register'} className="register" >Register</Link>
      </motion.div>
      {/* background graphics */}
      <div className="blobs">
        <motion.div className="Blob blob3" initial={{ x: -500 }} animate={{ x: 0 }} exit={{ x: -500 }} transition={{ duration: 0.5 }}>
          <BlurBlobs height="60vh" width="80vh" name="blob3" />
        </motion.div>
        <motion.div className="Blob blob4" initial={{ x: 500 }} animate={{ x: 0 }} exit={{ x: 500 }} transition={{ duration: 0.5 }}>
          <BlurBlobs height="60vh" width="80vh" name="blob4" />
        </motion.div>
      </div>
      {/* Heading Section */}
      <div className="headingSec">
        <motion.h1 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.4 } }} transition={{ duration: 0.3, delay: 0.2 }} exit={{ x: 100, opacity: 0 }}>welcome back</motion.h1>
        <motion.span initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }} transition={{ duration: 0.1, delay: 0.4 }} exit={{ x: 100, opacity: 0 }}>please login to continue</motion.span>
      </div>
      <div className="inputSec">
        {/* input section login using email / username or password */}
        <div className="manual">
          <motion.input initial={{ x: -100, y: -100, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }} exit={{ y: 150, opacity: 0 }} transition={{ duration: 0.4 }} type="text" placeholder='USERNAME / EMAIL' />
          <motion.input initial={{ x: -100, y: -100, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }} exit={{ y: 150, opacity: 0 }} transition={{ duration: 0.3 }} type={`${isVisible ? 'text' : 'password'}`} placeholder='PASSWORD' />
          <motion.div initial={{ x: -100, y: -100, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.2 } }} exit={{ y: 150, opacity: 0 }} transition={{ duration: 0.2 }}>
            <ButtonPrimary text="continue" padding="10.5vw" height="8vh" margin="5vh" width="20vw" name="Login" shadow="loginShadow" />
          </motion.div>
        </div>
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } }} exit={{ opacity: 0 }} className="line" />
        <div className="automatic">
          {/* automatic login using google/github/discord */}
          <motion.div initial={{ x: -100, y: -100, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }} exit={{ y: 150, opacity: 0 }} transition={{ dealy: 0.1, duration: 0.4 }} className="google"> <img src={google} alt="" /> <span>Login with google</span> </motion.div>
          <motion.div initial={{ x: -100, y: -100, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }} exit={{ y: 150, opacity: 0 }} transition={{ dealy: 0.2, duration: 0.3 }} className="github"> <img src={github} alt="" /> <span>Login with github</span> </motion.div>
          <motion.div initial={{ x: -100, y: -100, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.2 } }} exit={{ y: 150, opacity: 0 }} transition={{ dealy: 0.3, duration: 0.2 }} className="discord"> <img src={discord} alt="" /> <span>Login with discord</span> </motion.div>
        </div>
      </div>
      <div className="extras">
        {/* routing to forgot password and toggle password visibility */}
        <motion.span initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }} exit={{ y: 20, opacity: 0 }} transition={{ delay: 0.2 }} onClick={() => password()} ><i class={`uil ${isVisible ? "uil-eye-slash" : "uil-eye"}`}></i>Show password</motion.span>
        <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }} exit={{ y: 20, opacity: 0 }} transition={{ delay: 0.1 }}>forgot password</motion.h2>
      </div>
    </motion.div>
  )
}
export default LoginPage