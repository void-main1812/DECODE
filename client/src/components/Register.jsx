import React, { useState } from 'react'
import { Popup1 } from './RegPopUp';
import { BlurBlobs, ButtonPrimary } from '../Reusable'
import { motion } from 'framer-motion';
import google from "../assets/google.webp";
import github from "../assets/github.png";
import discord from "../assets/discord.png";

const Register = () => {
    const [trigger, setTrigger] = useState(true);

    return (
        <>
            <Popup1 trigger={trigger} setTrigger={setTrigger} height="40vh" width="50%">
                <h3 style={{ letterSpacing: '0.3vh', fontSize: '4vh', color: '#FF00E5' }}>Well Done !</h3>
                <p style={{ opacity: 0.5, padding: '2vh' }} >Now you need to provide some necessary information and you are good to go</p>
            </Popup1>
            <motion.div className="regSec" exit={{ scale: 2, opacity: 0, transition: { duration: 0.1 } }} >
                <motion.div initial={{ y: 800, opacity: 0.5 }} animate={{ y: 0, opacity: 1, transition: { duration: 1.5 } }} className="Blob blob6">
                    <BlurBlobs height="80vh" width="80vh" />
                </motion.div>
                <motion.h1 initial={{ x: -120, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 0.1, duration: 0.5 } }} style={{ color: '#fff' }}>Register</motion.h1>
                <motion.span initial={{ x: -120, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } }} className='description'>your are just one step away from your success</motion.span>
                <div className="regInput">
                    <div className="textSec">
                        <motion.input initial={{ x: -50, y: -50, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.3 } }} type="text" placeholder='YOUR USER NAME' title='Create a user name' />
                        <motion.input initial={{ x: -50, y: -50, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1, transition: { delay: 0.4, duration: 0.3 } }} type="text" placeholder='YOUR EMAIL' title='ex: 010$j*J@xy' />
                        <motion.input initial={{ x: -50, y: -50, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.3 } }} type="text" placeholder='CREATE PASSWORD' title='Enter your email-id' />
                        <motion.input initial={{ x: -50, y: -50, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.3 } }} type="text" placeholder='CONFIRM PASSWORD' title='re-enter the password' />
                    </div>
                </div>
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.9, duration: 0.5 } }} className="buttonSec">
                    <ButtonPrimary text="continue" to="/404" height="7vh" width="12vw" margin="2vh" padding="6vw" name="continue" shadow="continueShadow" />
                </motion.div>
                <div className="autoReg">
                    <motion.img initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }} src={google} alt="" />
                    <motion.img initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }} src={github} alt="" />
                    <motion.img initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.9 } }} src={discord} alt="" />
                </div>
            </motion.div>
        </>
    )
}

export default Register
