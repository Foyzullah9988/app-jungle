import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AllApps from '../Components/AllApps';

const Apps = () => {
    const { apps } = useApps();
    const [search ,setSearch]=useState('');
    // console.log(search);
    const term = search.trim().toLocaleLowerCase();
    const searchApp = term ? apps.filter(app=>app.title.toLocaleLowerCase().trim().includes(term)):apps;
    
    // console.log(searchApp);
    return (
        <div>
            <div className='text-center mb-7 mt-2'>
                <h2 className='text-xl font-bold'>Our All Applications</h2>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-xl'>All Apps <span className='text-sm'>({searchApp.length})Apps Found</span> </p>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search"  placeholder="Search" />
                </label>
            </div>

            <div className='m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-11/12  gap-4'>
                {
                    searchApp.map(app => <AllApps key={app.id} app={app} />)
                }
            </div>
        </div>
    );
};

export default Apps;