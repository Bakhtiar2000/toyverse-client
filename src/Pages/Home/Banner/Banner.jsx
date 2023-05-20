import React from 'react';
import kid1 from '/assets/Banner/kid-1.png'

const Banner = () => {
    return (
        // Explore the finest realistic action figures that you have never seen before
        <div className='h-[650px] md:h-[500px] bg-orange-50'>
            <div className='max-w-7xl mx-auto md:flex justify-evenly'>
                <img className='py-5 md:py-0 md:mt-20 mx-auto' src={kid1} alt="" />
                <div className='my-auto w-80 px-3 pt-4 md:px-0 md:pt-0'>
                    <p className='text-sm'>Big fun for kids</p>
                    <h2 className='text-3xl font-semibold'>Where imagination takes shape</h2>
                    <p>Welcome to Toy Verse, a leading producer of realistic toys that bring joy and imagination to life!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;