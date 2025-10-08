import React from 'react';
import useApps from '../Hooks/useApps';
import AllApps from '../Components/AllApps';

const Apps = () => {
    const { apps } = useApps();

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-xl font-bold'>Our All Applications</h2>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>{apps.length} Apps Found</p>
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
                    <input type="search" required placeholder="Search" />
                </label>
            </div>

            <div className='m-4'>
                {
                    apps.map(app => <AllApps key={app.id} app={app} />)
                }
            </div>
        </div>
    );
};

export default Apps;