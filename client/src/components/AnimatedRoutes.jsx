import React from 'react';
import LendingPage from './LendingPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './LoginPage';
import { Info } from './Register_1';
import AboutPage from './AboutPage';
import { AnimatePresence } from 'framer-motion';
import Register from './Register';
import Error404 from './Error404';
import Navbar from './Navbar';


const AnimatedRoutes = () => {

    const location = useLocation();

    return (

        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<><Navbar /><LendingPage /></>} />
                <Route path="/about" element={<><Navbar /><AboutPage /></>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/register' element={<Info />} />
                <Route path='/register_info' element={<Register />} />
                <Route path='/404' element={<Error404 />} />
            </Routes>
        </AnimatePresence>

    );
};

export default AnimatedRoutes;