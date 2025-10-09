import React from 'react';
import { CircleLoader } from "react-spinners";
const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-[60vh]'>

            <CircleLoader size={200}   color='#bd90fc'/>

        </div>
    );
};

export default Spinner;