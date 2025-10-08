import React from 'react';

const AllApps = ({app}) => {
const {image,downloads,ratingAvg}=app;

    return (
        <div className="card bg-base-100 w-96 shadow-sm hover:scale-105 transition ease-in-out">
            <figure className='h-48 overflow-hidden'>
                <img className='w-full object-cover'
                    src={image}
                    alt={app} />
            </figure>
            <div className="card-body">

                <div className="flex justify-between items-center">
                    <h2>{downloads}</h2>

                    <h2>{ratingAvg}</h2>
                </div>
            </div>
        </div>
    );
};

export default AllApps;