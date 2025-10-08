import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1'>
                404  Error page
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;