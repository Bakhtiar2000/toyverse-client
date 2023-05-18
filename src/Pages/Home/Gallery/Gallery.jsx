import React from 'react';
import gauntlet from '/assets/Gallery/infinity gauntlet.jpg'
import batman from '/assets/Gallery/batman.jpg'
import mandalorian from '/assets/Gallery/mandalorian.jpg'
import antman from '/assets/Gallery/antman.jpg'
import deadpool from '/assets/Gallery/deadpool.jpg'

const Gallery = () => {
    return (
        <div className=''>
            <h2 className='text-center font-bold text-5xl my-8'>Trending collections</h2>
            <div className='flex justify-center items-center gap-5'>
                <div className='grid grid-flow-row gap-5'>
                    <img className='w-80' src={antman} alt="" />
                    <img className='w-80' src={gauntlet} alt="" />
                </div>
                <img className='w-96' src={batman} alt="" />
                <div className='grid grid-flow-row gap-5'>
                    <img className='w-80' src={mandalorian} alt="" />
                    <img className='w-80' src={deadpool} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;