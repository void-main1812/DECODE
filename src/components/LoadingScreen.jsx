import React from 'react'
import Lottie from 'react-lottie'
import Robot from '../json/robot.json'
import Loading from '../json/loading.json'
import "../Styles/loding.scss"
import { BlurBlobs } from '../Reusable'

const LoadingScreen = () => {

    const loadingOptions = {
        loop: true,
        autoplay: true,
        animationData: Loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidyMid slice',
        }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Robot,
        rendererSettings: {
            preserveAspectRatio: 'xMidyMid slice',
        }
    }

    return (
        <>
            <div className="loadingSec">
                <div className="animation">
                    <Lottie options={defaultOptions} height={200} width={200} />
                </div>
                <div className="textSec">
                    <h1><span>D</span>ECODE</h1>
                    <div className="loading">
                        <Lottie options={loadingOptions} height={100} width={100} />
                        <span>loading...</span>
                    </div>
                </div>
                <BlurBlobs height="80vh" width="80vh" name="blob8" />
            </div>
        </>
    )
}

export default LoadingScreen
