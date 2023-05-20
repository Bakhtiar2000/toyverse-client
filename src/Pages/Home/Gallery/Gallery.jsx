import React from 'react';
import batman from '/assets/Gallery/batman.jpg'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='mb-10'>
            <h2 className='text-center font-semibold text-5xl my-8'>Trending collections</h2>
            <div className='md:flex justify-center items-center gap-5'>
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
                <div className='h-[480px] w-[320px] text-white text-2xl mb-5 text-center batman'>
                        <h2 className='text-4xl mb-10 mt-20'>Batman</h2>
                        <button className='btn btn-primary'>Buy now</button>
                    </div>
                <div className='grid grid-flow-row gap-5'>
                <div className='h-80 w-80 text-white text-2xl text-center mandalorian'>
                        <h2 className='text-4xl mb-10 mt-20'>Mandalorian</h2>
                        <button className='btn btn-primary'>Buy now</button>
                    </div>
                    <div className='h-80 w-80 text-white text-2xl text-center deadpool'>
                        <h2 className='text-4xl mb-10 mt-20'>Deadpool</h2>
                        <button className='btn btn-primary'>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;