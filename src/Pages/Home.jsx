import React from 'react';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import { Link } from 'react-router';
import Spinner from '../Components/Spinner';
import Hero from '../Components/Hero';


const Home = () => {

    const { apps, loading } = useApps();
    if (loading) return <Spinner />
    // console.log(apps);
    const homeData = apps.slice(0, 12);
    // console.log(apps);
    return (
        <div>
            <Hero/>
            <div className='text-center my-7'>
                <h2 className='text-3xl font-bold'>Trending Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full container mx-auto  gap-4'>
                {
                    homeData.map(app => <AppCard key={app.id} app={app} />)
                }
            </div>
            <div className='text-center '>
                <Link to='/apps' className='btn btn-accent my-8'>See All</Link>

            </div>
        </div>
    );
};

export default Home;