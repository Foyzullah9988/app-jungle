import React from 'react';
import { Link } from 'react-router';
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AllApps = ({ app }) => {
    const { id, image, title, downloads, ratingAvg } = app;

    return (
        <Link to={`/apps/${id}`} className="card   mx-auto p-4 w-full bg-gray-100 shadow-sm hover:scale-105 transition ease-in-out">
            <figure className='h-48 overflow-hidden'>
                <img className='w-full  object-cover'
                    src={image}
                    alt={`${title} app picture`} />
            </figure>
            <h3>{title}</h3>
            <div className="py-2">

                <div className="flex justify-between items-center">
                    <div><span>
                        <FontAwesomeIcon className='text-green-600' icon={faDownload} />
                    </span>{downloads}</div>

                    <div><span>
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                    </span>{ratingAvg}</div>
                </div>
            </div>
        </Link>
    );
};

export default AllApps;