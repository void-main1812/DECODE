import React, { useState } from 'react'
import { Popup1 } from './RegPopUp';
import { BlurBlobs, ButtonPrimary } from '../Reusable'
import { motion } from 'framer-motion';
import google from "../assets/google.webp";
import github from "../assets/github.png";
import discord from "../assets/discord.png";
import Information from "../json/register.json";
import RegImg from "../json/regImg.json";

/* ------------------------------------------------------Variants for Animation------------------------------------------------------ */
const diagonal = {
    initial: { x: -50, y: -50, opacity: 0 },
    animate1: { x: 0, y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
    animate2: { x: 0, y: 0, opacity: 1, transition: { delay: 0.4, duration: 0.3 } },
    animate3: { x: 0, y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.3 } },
    animate4: { x: 0, y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.3 } },
}

const leftRight = {
    initial: { x: -120, opacity: 0 },
    initial2: { x: -50, opacity: 0 },
    animate1: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
    animate2: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
    animate3: { x: 0, opacity: 1, transition: { delay: 0.7, duration: 0.5 } },
}

const blob = {
    initial: { y: 800, opacity: 0.5 },
    animate: { y: 0, opacity: 1, transition: { duration: 1.5 } }
}

const upDown = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.9, duration: 0.5 } }
}
/* ---------------------------------------------------------------------------------------------------------------------------------- */

const Register = () => {
    const [trigger, setTrigger] = useState(true);

    return (
        <>
        {/* popup box for registeration */}
            <Popup1 trigger={trigger} setTrigger={setTrigger} height="40vh" width="50%">
                <h3 style={{ letterSpacing: '0.3vh', fontSize: '4vh', color: '#FF00E5' }}>Well Done !</h3>
                <p style={{ opacity: 0.5, padding: '2vh' }} >Now you need to provide some necessary information and you are good to go</p>
            </Popup1>

            {/* Main Body */}
            <motion.div className="regSec" exit={{ scale: 2, opacity: 0, transition: { duration: 0.1 } }} >
                <motion.div variants={blob} initial="initial" animate="animate" className="Blob blob6">
                    <BlurBlobs height="80vh" width="80vh" />
                </motion.div>
                <motion.h1 variants={leftRight} initial="initial" animate="animate1" style={{ color: '#fff' }}>Register</motion.h1>
                <motion.span variants={leftRight} initial="initial" animate="animate2" className='description'>your are just one step away from your success</motion.span>
                <div className="regInput">
                    <div className="textSec">
                        {
                            Information.map((info) => {
                                return (
                                    <motion.input variants={diagonal} initial="initial" animate={info.animate} type="text" placeholder={info.placeholder} title={info.title} />
                                )
                            })
                        }
                    </div>
                </div>
                <motion.div variants={upDown} initial="initial" animate="animate" className="buttonSec">
                    <ButtonPrimary text="continue" to="/404" height="7vh" width="12vw" margin="2vh" padding="6vw" name="continue" shadow="continueShadow" />
                </motion.div>
                <div className="autoReg">
                    {
                        RegImg.map((reg) => {

                            {/* Array of images for registeration option */ }
                            const img = [google, github, discord]

                            return (
                                <motion.img variants={leftRight} initial="initial2" animate={reg.animate} src={img[reg.src]} alt="" />
                            )
                        })
                    }
                </div>
            </motion.div>
        </>
    )
}

export default Register
