import React from 'react';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';


const Home = () => {

    const {apps}=useApps();
    console.log(apps);
    const homeData = apps.slice(0, 20);
    // console.log(apps);
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-xl font-bold'>Trending Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='m-4 grid grid-cols-1 sm:grid-cols-4 gap-4'>
                {
                    homeData.map(app => <AppCard key={app.id} app={app} />)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-accent'>See All</button>

            </div>
        </div>
    );
};

export default Home;