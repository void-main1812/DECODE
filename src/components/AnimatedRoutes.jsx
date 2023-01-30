import React from 'react'
import LendingPage from './LendingPage'
import { Route, Routes, useLocation } from 'react-router-dom'
import LoginPage from './LoginPage'
import Info from './Register_1';
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LendingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/register' element={<Info/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes