import React from 'react'
import Lottie from 'react-lottie'
import Error from '../json/Error404.json';
import '../Styles/ErrorPage.scss'
import { Link } from 'react-router-dom';

const Error404 = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Error,
        rendererSettings: {
            preserveAspectRatio: 'xMidyMid slice',
        }
    }

    return (
        <>
            <div className='Error404'>
                <div className="backbtn">
                    <Link to="/" className='link' ><i class="uil uil-angle-left-b"></i>back</Link>
                </div>
                <h1>ERROR 404</h1>
                <p>PAGE NOT FOUND</p>
                <Lottie options={defaultOptions} height={400} width={400} />
                <span>probably the site is under construction</span>
            </div>
        </>
    )
}

export default Error404
