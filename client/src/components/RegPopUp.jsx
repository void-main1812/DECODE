import React from 'react'
import { BlurBlobs } from '../Reusable';
import Lottie from 'react-lottie';
import ThumbsUp from "../assets/thumbs-up.json"
import { motion } from 'framer-motion';
import '../../public/Styles/popup.scss'

export const Popup1 = (props) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ThumbsUp,
        rendererSettings: {
            preserveAspectRatio: 'xMidyMid slice',
        }
    }

    return (props.trigger) ? (
        <>
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.1, delay:1}}} className="popup">
                <div className="popup-inner" style={{ height: props.height, width: props.width }}>
                    <div className="Blob popupBlob">
                        <BlurBlobs height="15vh" width="15vh" />
                    </div>
                    <div className="Blob popupBlob2">
                        <BlurBlobs height="15vh" width="15vh" />
                    </div>
                    <Lottie options={defaultOptions} height={600} width={600} />
                    <div className="text_section">
                        <button className="close_button" onClick={() => props.setTrigger(false)}>
                            <i class='bx bx-x'></i>
                        </button>
                        {props.children}
                    </div>
                </div>
            </motion.div>
        </>
    ) : "";
}

