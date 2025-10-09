import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const {id,image,title,downloads,ratingAvg}=app;
    return (
        <Link to={`/apps/${id}`} className="card mx-auto  w-[340px] p-4 bg-gray-100 shadow-sm hover:scale-105 transition ease-in-out">
            <figure className='h-48 overflow-hidden'>
                <img className='w-full object-cover'
                    src={image}
                    alt={`${title} app picture`} />
            </figure>
            <h3>{title}</h3>
            <div className="">
                
                <div className="flex py-2 justify-between items-center">
                    <h2><span>
                            <FontAwesomeIcon className='text-green-600' icon={faDownload} />
                        </span>{downloads}</h2>
                
                    <h2><span>
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        </span>{ratingAvg}</h2>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;