import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BlurBlobs, ButtonPrimary } from '../Reusable'
import google from "../assets/google.webp";
import github from "../assets/github.png";
import discord from "../assets/discord.png";
import { motion } from 'framer-motion';
import '../../public/Styles/login.scss'
import Input from "../json/input.json";
import Auto from "../json/autoLogin.json";

/* -----------------------------------------------------------Micro Animations------------------------------------------------------- */
const upDown = {
  initial: { y: -100, opacity: 0 },
  animate1: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
  animate2: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
  exit: { x: 150, opacity: 0, transition: { duration: 0.3 } }
}

const Blobs = {
  leftRight: { x: -500, opacity: 1, transition: { duration: 0.5 } },
  rightLeft: { x: 500, opacity: 1, transition: { duration: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5 } }
}

const Info = {
  initial: { y: -100, x: -100, opacity: 0 },
  animate1: { y: 0, x: 0, opacity: 1, transition: { duration: 1.2, delay: 0.5 } },
  animate2: { y: 0, x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  animate3: { y: 0, x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  exit: { y: 100, opacity: 0, transition: { duration: 0.5 } }
}

const Fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
}

/* ---------------------------------------------------------ARRAY FOR IMAGES--------------------------------------------------------- */
const Image = [google, github, discord]

const LoginPage = () => {
  /* ---------------------------------------------------Visibility Function for password--------------------------------------------- */
  const [isVisible, setIsVisible] = useState(false);

  function password() {
    setIsVisible(!isVisible);
  }


  return (
    /* --------------------------------------------------------------Body------------------------------------------------------------ */
    <motion.div initial={{ height: '100vh' }}>

      <motion.div variants={upDown} initial="initial" animate="animate1" exit="exit" className="topNav"> {/* top cancel & register button */}
        <Link to={'/'} className="back" >cancel<i class='bx bx-right-arrow-alt' undefined ></i></Link>
        <Link to={'/register'} className="register" >Register</Link>
      </motion.div>

      <div className="blobs">           {/* background graphics */}
        <motion.div className='Blob blob3' variants={Blobs} initial="leftRight" animate="animate" exit="leftRight">
          <BlurBlobs height="60vh" width="80vh" name="blob3" />
        </motion.div>
        <motion.div className="Blob blob4" variants={Blobs} initial="rightLeft" animate="animate" exit="rightLeft">
          <BlurBlobs height="60vh" width="80vh" name="blob4" />
        </motion.div>
      </div>

      <div className="headingSec">        {/* Heading Section */}
        <motion.h1 variants={upDown} initial="initial" animate="animate1" exit="exit" >welcome back</motion.h1>
        <motion.span variants={upDown} initial="initial" animate="animate2" exit="exit">please login to continue</motion.span>
      </div>

      <div className="inputSec">          {/* input section login using email / username or password */}
        <div className="manual">
          {
            Input.map((input) => {
              const visible = isVisible ? "text" : "password";
              return (
                <motion.input variants={Info} initial="initial" animate={input.animate} exit="exit" type={`${input.className == "password" ? visible : input.type}`} placeholder={input.placeHolder} />
              )
            })
          }
          <motion.div variants={Info} initial="initial" animate="animate3" exit="exit">
            <ButtonPrimary text="continue" to="/404" padding="10.5vw" height="8vh" margin="5vh" width="20vw" name="Login" shadow="loginShadow" />
          </motion.div>
        </div>

        <motion.div variants={Fade} initial="initial" animate="animate" exit="exit" className="line" />

        <div className="automatic">       {/* automatic login using google/github/discord */}
          {
            Auto.map((auto) => {
              return (
                <motion.div variants={Info} initial="initial" animate={auto.animate} exit="exit" className={auto.className}> <img src={Image[auto.image]} alt="" /> <span>{auto.Text}</span> </motion.div>
              )
            })
          }
        </div>
      </div>

      <div className="extras">            {/* routing to forgot password and toggle password visibility */}
        <motion.span variants={upDown} initial="initial" animate="animate1" exit="exit" onClick={() => password()} ><i class={`uil ${isVisible ? "uil-eye-slash" : "uil-eye"}`}></i>Show password</motion.span>
        <motion.h2 variants={upDown} initial="initial" animate="animate2" exit="exit">forgot password</motion.h2>
      </div>
      
    </motion.div>
  )
}
export default LoginPage