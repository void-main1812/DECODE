import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BlurBlobs, ButtonPrimary } from '../Reusable'
import { motion } from 'framer-motion';
import "../Styles/info.scss";
import { Popup1 } from './RegPopUp';
import google from "../assets/google.webp";
import github from "../assets/github.png";
import discord from "../assets/discord.png";

export const Info = () => {
    return (
        <motion.div exit={{ scale: 1.2, transition: { duration: 0.01 } }}>
            <motion.div initial={{ x: 500, y: 200 }} animate={{ x: 0, y: 0, transition: { duration: 1 } }} className="Blob blob5">
                <BlurBlobs height="80vh" width="80vh" />
            </motion.div>
            <div className="heading">
                <motion.h2 initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}>welcome to decode</motion.h2>
                <motion.span initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.75 } }}>But before anything else tell us something about yourself</motion.span>
            </div>

            <div className="infoSec">
                <motion.span initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.7, delay: 1 } }} >Hello, i'm <input type="text" placeholder='your name' /> CURRENTLY STUDYING <input type="text" placeholder='your course' /> COURSE from <input type="text" placeholder='collage' /> university/collage. i WANT TO JOIN DECODE BECAUSE: </motion.span>
                <motion.textarea initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.7, delay: 1.5 } }} id="" rows="10" placeholder='enter a reason which states why you want to join decode (OPTIONAL)'></motion.textarea>
                <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 2 } }}>
                    <Link to={'/login'} className='loginBtn' >already have an account? login now!!</Link>
                </motion.div>
            </div>
            <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5 } }} className="buttonSecInfo">
                <ButtonPrimary to="/register_info" height='6.5vh' text="continue" padding="5vw" width="6vw" margin="1vh" name="continue" shadow="shadow" />
                <div>
                    <Link to={"/"} className="buttonCancel">cancel</Link>
                </div>
            </motion.div>
        </motion.div>
    )
}

export const Register = () => {

    const [trigger, setTrigger] = useState(true);

    return (
        <>
            <Popup1 trigger={trigger} setTrigger={setTrigger} height="40vh" width="50%">
                <h3 style={{ letterSpacing: '0.3vh', fontSize: '4vh', color: '#FF00E5' }}>Well Done !</h3>
                <p style={{ opacity: 0.5, padding: '2vh' }} >Now you need to provide some necessary information and you are good to go</p>
            </Popup1>
            <motion.div className="regSec" exit={{scale:2, opacity:0, transition:{duration:0.1}}} >
                <motion.div initial={{y:800, opacity:0.5}} animate={{y:0, opacity:1, transition:{duration:1.5 }}} className="Blob blob6">
                    <BlurBlobs height="80vh" width="80vh" />
                </motion.div>
                <motion.h1 initial={{x:-120, opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.1, duration:0.5}}} style={{ color: '#fff' }}>Register</motion.h1>
                <motion.span initial={{x:-120, opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.5, duration:0.5}}} className='description'>your are just one step away from your success</motion.span>
                <div className="regInput">
                    <div className="textSec">
                        <motion.input initial={{x:-50, y:-50, opacity:0}} animate={{x:0, y:0, opacity:1, transition:{delay:0.2}}} type="text" placeholder='YOUR USER NAME' title='Create a user name' />
                        <motion.input initial={{x:-50, y:-50, opacity:0}} animate={{x:0, y:0, opacity:1, transition:{delay:0.4}}} type="text" placeholder='CREATE A PASSWORD' title='ex: 010$j*J@xy' />
                        <motion.input initial={{x:-50, y:-50, opacity:0}} animate={{x:0, y:0, opacity:1, transition:{delay:0.6}}} type="text" placeholder='YOUR EMAIL' title='Enter your email-id' />
                        <motion.input initial={{x:-50, y:-50, opacity:0}} animate={{x:0, y:0, opacity:1, transition:{delay:0.8}}} type="text" placeholder='CONFIRM PASSWORD' title='re-enter the password' />
                    </div>
                </div>
                <motion.div initial={{y:-50, opacity:0}} animate={{y:0, opacity:1, transition:{delay:0.9, duration:0.5}}} className="buttonSec">
                    <ButtonPrimary text="continue" height="7vh" width="12vw" margin="2vh" padding="6vw" name="continue" shadow="continueShadow" />
                </motion.div>
                <div className="autoReg">
                    <motion.img initial={{x:-80, opacity:0}} animate={{x:0, opacity:1, transition:{duration:0.3}}} src={google} alt="" />
                    <motion.img initial={{x:-80, opacity:0}} animate={{x:0, opacity:1, transition:{duration:0.6}}} src={github} alt="" />
                    <motion.img initial={{x:-80, opacity:0}} animate={{x:0, opacity:1, transition:{duration:0.9}}} src={discord} alt="" />
                </div>
            </motion.div>
        </>
    )
}