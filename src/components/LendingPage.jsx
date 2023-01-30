import React from 'react';
import { BlurBlobs, ButtonPrimary } from '../Reusable';
import '../Styles/lendingPage.scss';
import { motion } from 'framer-motion';
import html from '../assets/html.png';
import json from '../assets/json.png';
import mobile from '../assets/mobile.png';
import website from '../assets/website.png';
import Navbar from './Navbar';

const LendingPage = () => {
    return (
        <motion.div initial={{height: '100vh', opacity:0 }} animate={{opacity:1}} exit={{opacity:0}}>
            <Navbar />
            <motion.div className="blobs">
                <motion.div initial={{x:-50, y:100, opacity:0}} animate={{x:0, y:0, opacity:1}} transition={{duration:0.5}} className="Blob blob1">
                    <BlurBlobs height="60vh" width="60vh" name="blob1" />
                </motion.div>
                <motion.div initial={{x:50, y:100, opacity:0}} animate={{x:0, y:0, opacity:1}} transition={{duration:0.5}} className="Blob blob2">
                    <BlurBlobs height="60vh" width="60vh" />
                </motion.div>
            </motion.div>
            <div className="lendingPage">
                <div className="textSec">
                    <div className="Heading">
                        <motion.span initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1}} exit={{x:100, opacity:0, transition:{duration:0.2}}} transition={{ delay: 0.35, type: 'spring', stiffness: 80 }} className='TitleSmall'>WELCOME TO</motion.span>
                        <motion.span initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1}} exit={{x:100, opacity:0, transition:{duration:0.2}}} transition={{ delay: 0.6, type: 'spring', stiffness: 80 }} className='Title'>DECODE</motion.span>
                    </div>
                    <motion.p initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.75, type: 'spring', stiffness: 100 }}>IMPROVE YOUR SKILLS BY WORKING ON REAL LIFE PROJECTS AND EXPLORING NEW SKILLS</motion.p>
                    <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3, delay: 1.25, type: 'spring', stiffness: 80 }} className="buttonSec">
                        <ButtonPrimary text="start your journey now" to="/register" padding="5vw" height="9vh" margin="4vh" width="30vw" name="signUp_btn" shadow="BtnShadow" />
                    </motion.div>
                    <motion.div initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 80 }} className="tagline">#learn together grow together</motion.div>
                </div>
                <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.8, duration:1}}} exit={{opacity:0}} transition={{duration:0.1}} className="imgSec">
                    <motion.img initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }} src={html} title="Web Development" alt="" className='html' />
                    <motion.img initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }} src={website} title="Ui/Ux Designing & Development" alt="" className='website' />
                    <motion.img initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }} src={json} alt="" title='JavaScript Development' className='json' />
                    <motion.img initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 1.75, repeat: Infinity, repeatType: 'reverse' }} src={mobile} alt="" title='Mobile App Development' className='mobile' />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default LendingPage