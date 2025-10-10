import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const {id,image,title,downloads,ratingAvg}=app;
    return (
        <Link to={`/apps/${id}`} className="card mx-auto  w-[340px] p-4 bg-gray-100 shadow-sm hover:scale-105 transition ease-in-out">
            <figure className='h-48 overflow-hidden'>
                <img className='w-full h-full object-cover'
                    src={image}
                    alt={`${title} app picture`} />
            </figure>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <div className="">
                
                <div className="flex py-2 justify-between items-center font-medium">
                    <h2 className='bg-green-100 text-green-600 p-0.5 rounded-[6px]'><span>
                            <FontAwesomeIcon className='' icon={faDownload} />
                        </span>{downloads}M</h2>
                
                    <h2 className='bg-yellow-100 p-0.5 text-yellow-500 rounded-[6px]'><span>
                            <FontAwesomeIcon className='' icon={faStar} />
                        </span>{ratingAvg}</h2>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;