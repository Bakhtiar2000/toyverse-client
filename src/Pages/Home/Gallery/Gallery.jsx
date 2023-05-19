import React from 'react';
import batman from '/assets/Gallery/batman.jpg'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='mb-10'>
            <h2 className='text-center font-bold text-5xl my-8'>Trending collections</h2>
            <div className='flex justify-center items-center gap-5'>
                <div className='grid grid-flow-row gap-5'>
                    <div className='h-80 w-80 text-white text-2xl text-center antman'>
                        <h2 className='text-4xl mb-10 mt-20'>Antman</h2>
                        <button className='btn btn-primary'>Buy now</button>
                    </div>
                    <div className='h-80 w-80 text-white text-2xl text-center gauntlet'>
                        <h2 className='text-4xl mb-10 mt-20'>Gauntlet</h2>
                        <button className='btn btn-primary'>Buy now</button>
                    </div>
                </div>
                <img className='w-96 relative' src={batman} alt="" />
                <div className='absolute text-center text-white'>
                    <h2 className='text-5xl mb-10'>Batman</h2>
                    <button className='btn btn-primary'>Buy now</button>
                </div>
                <div className='grid grid-flow-row gap-5'>
                <div className='h-80 w-80 text-white text-2xl text-center mandalorian'>
                        <h2 className='text-4xl mb-10 mt-20'>Antman</h2>
                        <button className='btn btn-primary'>Buy now</button>
                    </div>
                    <div className='h-80 w-80 text-white text-2xl text-center deadpool'>
                        <h2 className='text-4xl mb-10 mt-20'>deadpool</h2>
                        <button className='btn btn-primary'>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;