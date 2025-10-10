import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 flex flex-col justify-center items-center'>
                <div>
                    <img src="/src/assets/error-404.png" alt="" />
                </div>
                <div className='space-y-2 mt-2 flex flex-col justify-center items-center'>
                    <h2 className='text-xl font-bold'>Oops, page not found!</h2>
                <p>The page you are looking for is not available.</p>
                <Link to='/' className='btn bg-gradient-to-tl to-[#885bf2] from-[#a36bf0]'>Go Back!</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;