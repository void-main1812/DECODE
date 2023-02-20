import React from 'react'
import { Link } from 'react-router-dom';
import { BlurBlobs, ButtonPrimary } from '../Reusable'
import { motion } from 'framer-motion';
import '../../public/Styles/info.scss'

export const Info = () => {
    return (
        <motion.div exit={{ scale: 1.2, opacity:0, transition: { duration: 0.01 } }}>
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