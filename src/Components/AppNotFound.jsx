import React from 'react';

const AppNotFound = () => {
    return (
       <div className='flex flex-col my-6  justify-center items-center'>
            
            <div className=' flex flex-col justify-center items-center'>
                <div>
                    <img src="/src/assets/App-Error.png" alt="" />
                </div>
                <div className='space-y-2 mt-2 flex flex-col justify-center items-center'>
                    <h2 className='text-xl font-bold'>OPPS!! APP NOT FOUND</h2>
                <p>The App you are requesting is not found on our system.  please try another apps</p>
                </div>
            </div>
          
        </div>
    );
};

export default AppNotFound;<img src="" alt="" />