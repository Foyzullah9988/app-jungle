import { faAppleAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className=' flex flex-col justify-center items-center gap-3 mb-8'>
                <h1 className='text-4xl font-bold text-center'>We Build <br /> <span className='text-fuchsia-700'>Productive</span>  Apps</h1>
                <p className='w-8/12 text-center'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='space-x-3'>
                    <button className='btn'>
                        <FontAwesomeIcon className='text-blue-400' icon={faPlay} />
                        Google Play</button>
                    <button className='btn'>
                        <FontAwesomeIcon className='text-green-400' icon={faAppleAlt} />
                        App Store</button>
                </div>
            </div>
            <div className='flex  justify-center items-center'>
                <img src="/src/assets/hero.png" alt="" />
            </div>
            <div className=" bg-gradient-to-tl to-[#6728f8] from-[#9F62F2] w-full">
                <div className='container mx-auto  space-y-5 p-8 text-white'>
                    <h2 className='text-center text-2xl font-bold'>Trusted by Millions, Built for You</h2>
                    <div className='flex justify-evenly items-center'>
                        <div className='text-center'>
                            <p>Total Downloads</p>
                            <span className='text-4xl font-bold '>29.6M</span>
                            <p>21% more than last month</p>
                        </div>
                        <div className='text-center'>
                            <p>Total Reviews</p>
                            <span className='text-4xl font-bold '>906K</span>
                            <p>46% more than last month</p>
                        </div>
                        <div className='text-center'>
                            <p>Active Apps</p>
                            <span className='text-4xl font-bold '>132+</span>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;