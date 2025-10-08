import React from 'react';

const AppCard = ({ app }) => {
    const {id,image,title,downloads,ratingAvg}=app;
    return (
        <Link to={`/apps/${id}`} className="card w-[340px] p-4 bg-amber-100 shadow-sm hover:scale-105 transition ease-in-out">
            <figure className='h-48 overflow-hidden'>
                <img className='w-full object-cover'
                    src={image}
                    alt={`${title} app picture`} />
            </figure>
            <h3>{title}</h3>
            <div className="">
                
                <div className="flex py-2 justify-between items-center">
                    <h2>{downloads}</h2>
                
                    <h2>{ratingAvg}</h2>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;