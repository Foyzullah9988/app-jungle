import React from 'react';
import { Link } from 'react-router';
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AllApps = ({ app }) => {
    const { id, image, title, downloads, ratingAvg } = app;

    return (
        <Link to={`/apps/${id}`} className="card   mx-auto p-4 w-full bg-gray-100 shadow-sm hover:scale-105 transition ease-in-out">
            <figure className='h-48 overflow-hidden'>
                <img className='w-full  h-full object-cover'
                    src={image}
                    alt={`${title} app picture`} />
            </figure>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <div className="py-2">

                <div className="flex justify-between items-center">
                    <h2  className='bg-green-100 text-green-600 p-0.5 font-medium rounded-[6px]'><span>
                        <FontAwesomeIcon className='' icon={faDownload} />
                    </span>{downloads}</h2>

                    <h2 className='bg-yellow-100 p-0.5 text-yellow-500 font-medium rounded-[6px]'><span>
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                    </span>{ratingAvg}</h2>
                </div>
            </div>
        </Link>
    );
};

export default AllApps;