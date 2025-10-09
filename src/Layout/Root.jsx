import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import {  Slide, ToastContainer } from 'react-toastify';
import Spinner from '../Components/Spinner';

const Root = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 max-w-screen-2xl mx-auto w-full px-4 md:px-4 lg:px-12 py-4 md:py-4 lg:py-12'>
                <Outlet />
            </div>
            
            <Footer />
            <ToastContainer closeOnClick={true} 
                draggable
                pauseOnHover
                
                transition={Slide} />
        </div>
    );
};

export default Root;