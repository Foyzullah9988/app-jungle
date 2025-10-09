import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { faDownload, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Flip, toast, Zoom } from 'react-toastify';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Spinner from '../Components/Spinner';
import AppNotFound from '../Components/AppNotFound';

const AppDetails = () => {
    const { pId } = useParams();
    // console.log( pId);
    const { apps, loading } = useApps();
    console.log(loading);
    // console.log(apps);
    const app = apps.find(app => app.id === Number(pId));
    console.log(app);

    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        if (!app) return;
        const existAppList = JSON.parse(localStorage.getItem('installedApps')) || [];
        const dup = existAppList.some(ap => ap.id === app.id);
        if (dup) {
            setIsInstalled(true)
        }

    }, [app])

    if (loading) return <Spinner />

    const { id, companyName, description, downloads, image, ratingAvg, ratings, reviews, size, title, subtitle } = app || {};

    const handleInstall = () => {
        const existAppList = JSON.parse(localStorage.getItem('installedApps'));
        // console.log(existAppList);
        let updateAppList = [];
        if (existAppList) {
            const isDuplicate = existAppList.some(ap => ap.id === app.id)
            if (isDuplicate) {
                // setIsInstalled(true)
                return toast('App already installed', { transition: Flip, position: "top-center", theme: "colored", });
            }
            updateAppList = [...existAppList, app]
        } else {
            updateAppList.push(app)
        }
        console.log(updateAppList);

        localStorage.setItem('installedApps', JSON.stringify(updateAppList));
        setIsInstalled(true);
        toast('App installed', { transition: Zoom, position: "top-left" })
    }

    return (
        <div>
            {
                id != pId ? <AppNotFound /> :

                    <div>
                        <div className="card flex flex-col md:flex-row card-side bg-base-100 shadow-sm">
                            <figure>
                                <img className='w-[200px] rounded-xl h-[200px] object-cover'
                                    src={image}
                                    alt={`${title} app picture`} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{title}:{subtitle}</h2>
                                <p>Developed by <span className='text-fuchsia-600 font-semibold'>{companyName}
                                </span></p>
                                <div className='flex justify-start items-center gap-6'>
                                    <div className='flex flex-col justify-center my-1'>
                                        <span>
                                            <FontAwesomeIcon className='text-green-600' icon={faDownload} />
                                        </span>
                                        <span>Downloads</span>
                                        <span className='text-xl font-bold'>{downloads}</span>
                                    </div>
                                    <div className='flex flex-col justify-center my-1'>
                                        <span>
                                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                                        </span>
                                        <span>Average Ratings</span>
                                        <span className='text-xl font-bold'>{ratingAvg}</span>
                                    </div>
                                    <div className='flex flex-col justify-center my-1'>
                                        <span>
                                            <FontAwesomeIcon className='text-blue-400' icon={faThumbsUp} />
                                        </span>
                                        <span>Total Reviews</span>
                                        <span className='text-xl font-bold'>{reviews}</span>
                                    </div>
                                </div>
                                <div className='card-actions justify-start'>
                                    <button onClick={handleInstall} className="btn font-semibold text-white bg-gradient-to-tl from-green-400 to-green-800">
                                        {
                                            isInstalled ? 'Installed' : `Install (${size} MB)`
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Rating</h3>
                            <div className='h-80'>

                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        width={500}
                                        height={300}
                                        layout='vertical'
                                        data={ratings}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type='number' />
                                        <YAxis dataKey="name" type='category' />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="count" fill="#8884d8" />

                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className='my-7'>
                            <h2 className='font-semibold my-2'>Description</h2>
                            <p>{description}</p>
                        </div>

                    </div>
            }
        </div>

    );
};

export default AppDetails;