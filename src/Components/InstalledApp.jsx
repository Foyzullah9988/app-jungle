import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {  Slide, toast} from 'react-toastify';

const InstalledApp = ({ app ,setInstalledApp}) => {
    const { title, size, ratingAvg, downloads, image,subtitle } = app || {};

     const handleUninstall = id => {
        const existAppList = JSON.parse(localStorage.getItem('installedApps'));
        let updateAppList =existAppList.filter(app=>app.id !== id)
        setInstalledApp(updateAppList)
        localStorage.setItem('installedApps', JSON.stringify(updateAppList));
        toast('App Uninstalled',{transition: Slide,position: "top-right"})
    }

    return (
        <div className="flex justify-center items-center md:flex-row flex-col card-side bg-base-100 shadow-sm p-2 container mx-auto rounded-xl">
            <figure className=' m-3'>
                <img className='md:w-[200px] rounded-xl  object-cover'
                    src={image}
                    alt={`${title} app picture`} />
            </figure>
            <div className="card-body flex flex-col justify-center items-start">
                <h2 className="card-title">{title} : {subtitle}</h2>

                <div className='flex justify-start items-center gap-6'>
                    <div className='flex justify-center my-1'>
                        <span>
                            <FontAwesomeIcon className='text-green-600' icon={faDownload} />
                        </span>
                        <span className=' text-green-600'>{downloads}</span>
                    </div>
                    <div className='flex  justify-center my-1'>
                        <span>
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        </span>
                        <span className='text-yellow-400'>{ratingAvg}</span>
                    </div>
                    <div >
                        
                        <span className='text-gray-800'>{size}MB</span>
                    </div>
                </div>
            </div>
            <div className="card-actions  items-center justify-end">
                <button onClick={()=>handleUninstall(app.id)} className="btn bg-gradient-to-tl to-red-800 from-red-400 text-semibold text-white">Uninstall</button>
            </div>
            
        </div>
    );
};

export default InstalledApp;