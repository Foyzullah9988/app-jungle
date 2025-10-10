import React, { useState } from 'react';
import InstalledApp from '../Components/InstalledApp';
import { loadInstalledApps } from '../Utilis/LocalStorage';
import useApps from '../Hooks/useApps';
import Spinner from '../Components/Spinner';

const Installation = () => {
    const {loading} = useApps() ;
    const [installedApp, setInstalledApp] = useState(() => loadInstalledApps());
    const [sort, setSort] = useState('none')
    if(loading)return <Spinner/>


    const sortItem = (
        () => {
            if (sort === 'size') {
                return [...installedApp].sort((a, b) => b.size - a.size)
            }else if (sort === 'downloads') {
                return [...installedApp].sort((a, b) => b.downloads - a.downloads)
            }
            else if (sort === 'rating') {
                return [...installedApp].sort((a, b) => b.ratingAvg - a.ratingAvg)
            } else {
                return installedApp
            }
        }
    )()

    return (
        <div className='container mx-auto'>
            <div className=' flex flex-col my-2 justify-center gap-2 items-center'>
                <h2 className='text-3xl font-bold'>
                    Your Installed Apps
                </h2>
                <p>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className='flex justify-between items-center mt-6'>
                <h3><span className='text-xl font-bold'>Installed Apps </span>({installedApp.length}) Apps Found</h3>
                <label className='w-full form-control max-w-xs'>
                    <select value={sort} onChange={e => setSort(e.target.value)} className='select select-bordered'>
                        <option value='none'>Sort by time</option>
                        <option value='size'>Sort by size</option>
                        <option value='downloads'>Sort by downloads</option>
                        <option value='rating'>Sort by rating</option>
                    </select>
                </label>
            </div>
            {
                installedApp.length == 0 ? 
                <div className='flex flex-col justify-center items-center h-64 text-xl font-semibold text-gray-500'>
                    <p>You have no app Installed.</p>
                    <p>Install some and enjoy.</p>
                </div> :
                    <div className='flex flex-col justify-center items-center gap-3 my-3'>
                        {
                            sortItem.map(app => <InstalledApp setInstalledApp={setInstalledApp} key={app.id} app={app} />)
                        }
                    </div>
            }


        </div>
    );
};

export default Installation;