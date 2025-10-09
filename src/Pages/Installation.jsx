import React, {  useState } from 'react';
import InstalledApp from '../Components/InstalledApp';
import { loadInstalledApps } from '../Utilis/LocalStorage';

const Installation = () => {
    const [installedApp, setInstalledApp] = useState(()=>loadInstalledApps());
    const [sort, setSort] = useState('none')
    

    const sortItem = (
        () => {
            if (sort === 'size') {
                return [...installedApp].sort((a, b) => b.size - a.size)
            }
            else if (sort === 'rating') {
                return [...installedApp].sort((a, b) => b.ratingAvg - a.ratingAvg)
            } else {
                return installedApp
            }
        }
    )()



   

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h3><span className='text-xl font-bold'>Installed Apps </span>({installedApp.length}) Apps Found</h3>
                <label className='w-full form-control max-w-xs'>
                    <select value={sort} onChange={e => setSort(e.target.value)} className='select select-bordered'>
                        <option value='none'>Sort by time</option>
                        <option value='size'>Sort by size</option>
                        <option value='rating'>Sort by rating</option>
                    </select>
                </label>
            </div>
            <div className='space-y-4 my-3'>
                {
                    sortItem.map(app => <InstalledApp setInstalledApp={setInstalledApp} key={app.id} app={app} />)
                }
            </div>
            
        </div>
    );
};

export default Installation;