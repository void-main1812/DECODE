import React from 'react';
import { BlurBlobs, ButtonPrimary } from '../Reusable';
import { motion } from 'framer-motion';
import html from '../assets/html.png';
import json from '../assets/json.png';
import mobile from '../assets/mobile.png';
import website from '../assets/website.png';
import Navbar from './Navbar';
import Images from "../json/lendingImages.json";
import '../../public/Styles/lendingPage.scss';

/* ----------------------------------------------Micro Animations--------------------------------------- */
const leftRight = {
    hidden: { x: -200, opacity: 0 },
    hidden2: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: 0.35, type: 'spring', stiffness: 80 } },
    visible2: { x: 0, opacity: 1, transition: { delay: 0.6, type: 'spring', stiffness: 80 } },
    visible3: { x: 0, opacity: 1, transition: { delay: 1.5, duration: 0.5, type: 'spring', stiffness: 80 } },
    exit: { x: 100, opacity: 0, transition: { duration: 0.2 } },
}

const scale = {
    hidden: { scale: 0.75, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3, delay: 1.25, type: 'spring', stiffness: 80 } }
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
}

const upDown = {
    hidden: { y: -150, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.75, type: 'spring', stiffness: 100 } }
}

const imageAnimation = {
    initial: {
        y: -20
    },
    animate: {
        y: 20,
    }
}
/* ---------------------------------------------------------------------------------------------------------------------------------- */


/* --------------------------------------------------Array for Images---------------------------------------------------------------- */
const images = [html, json, mobile, website];
/* ------------------------------------------------------------Body------------------------------------------------------------------ */


const LendingPage = () => {
    return (

        <motion.div initial={{ height: '100vh', opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Navbar />
            <motion.div className="blobs">
                {/* ---------------------------------Background Blobs---------------------------------- */}
                <motion.div variants={leftRight} initial="hidden" animate="visible" className="Blob blob1">
                    <BlurBlobs height="60vh" width="60vh" name="blob1" />
                </motion.div>
                <motion.div variants={leftRight} initial="hidden2" animate="visible" className="Blob blob2">
                    <BlurBlobs height="60vh" width="60vh" />
                </motion.div>
                {/* ----------------------------------------------------------------------------------- */}
            </motion.div>
            <div className="lendingPage">
                <div className="textSec">
                    <div className="Heading">
                        <motion.span variants={leftRight} initial="hidden" animate="visible" exit="exit" className='TitleSmall'>WELCOME TO</motion.span>
                        <motion.span variants={leftRight} initial="hidden" animate="visible2" exit="exit" className='Title'>DECODE</motion.span>
                    </div>
                    <motion.p variants={upDown} initial="hidden" animate="visible" >IMPROVE YOUR SKILLS BY WORKING ON REAL LIFE PROJECTS AND EXPLORING NEW SKILLS</motion.p>
                    <motion.div variants={scale} initial="hidden" animate="visible" className="buttonSec">
                        <ButtonPrimary text="start your journey now" to="/register" padding="5vw" height="9vh" margin="4vh" width="30vw" name="signUp_btn" shadow="BtnShadow" />
                    </motion.div>
                    <motion.div variants={leftRight} initial="hidden" animate="visible3" exit="exit" className="tagline">#learn together grow together</motion.div>
                </div>
                <motion.div variants={fadeIn} initial="hidden" animate="visible" exit="exit" className="imgSec">
                    {
                        Images.map((item) => {
                            let i = 0;
                            return (
                                <motion.img variants={imageAnimation} initial="initial" animate="animate" transition={{ duration: item.duration, repeat: Infinity, repeatType: 'reverse' }} src={images[item.src]} title={item.title} alt="" className={item.className} />
                            )
                        })
                    }
                </motion.div>
            </div>
        </motion.div>
    )
}

/* ---------------------------------------------------------------------------------------------------------------------------------- */
// Export components
export default LendingPage