import React from 'react';
import kid1 from '/assets/Banner/kid-1.png'

const Banner = () => {
    return (
        // Explore the finest realistic action figures that you have never seen before
        <div className='h-[500px] bg-slate-100'>
            <div className='max-w-7xl mx-auto flex justify-between'>
                <img className='mt-20' src={kid1} alt="" />
                <div className='my-auto w-80'>
                    <p className='text-sm'>Big fun for kids</p>
                    <h2 className='text-3xl font-semibold'>Where imagination takes shape</h2>
                    <p>Welcome to Toy Verse, a leading producer of realistic toys that bring joy and imagination to life!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;