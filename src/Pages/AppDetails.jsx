import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { faDownload, faRankingStar, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const AppDetails = () => {
    const { id } = useParams();
    console.log(id);
    const { apps, loading } = useApps();
    const app = apps.find(app => String(app.id) === id)
    console.log(app);
    if (loading) return <p>loading...</p>
    const { companyName, description, downloads, image, ratingAvg, ratings, reviews, size, title, subtitle } = app || {};

    return (
        <div>

            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img className='w-full object-cover'
                        src={image}
                        alt={`${title} app picture`} />
                </figure>
                <div className="card-body">

                    <h2 className="card-title">{title}:{subtitle}</h2>
                    <p>Developed by <span className='text-fuchsia-600 font-semibold'>{companyName}</span></p>
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
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Install ({`${size} MB`})</button>
                    </div>
                </div>

            </div>
            <div className='my-7'>
                <h2 className='font-semibold my-2'>Description</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;