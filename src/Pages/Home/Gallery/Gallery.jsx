import React from 'react';
import batman from '/assets/Gallery/batman.jpg'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='mb-10 max-w-7xl mx-auto'>
            <h2 className='text-center font-semibold text-5xl my-8'>Trending collections</h2>
            <div className='grid lg:grid-cols-3 gap-10'>
                <div className='grid grid-flow-row gap-5'>
                    <div className='h-80 w-80 text-white text-2xl text-center antman mx-auto'>
                        <h2 className='text-4xl mb-4 font-extrabold mt-48 text-orange-100'>Antman</h2>
                        <button className='btn border-0 bg-orange-700'>Buy now</button>
                    </div>
                    <div className='h-80 w-80 text-white text-2xl text-center gauntlet mx-auto'>
                        <h2 className='text-4xl mb-4 font-extrabold mt-48 text-orange-100'>Infinity Gauntlet</h2>
                        <button className='btn border-0 bg-orange-700'>Buy now</button>
                    </div>
                </div>
                <div className='h-[480px] w-[320px] text-white text-2xl text-center batman mx-auto my-auto'>
                        <h2 className='text-4xl font-extrabold mb-4 text-orange-100 mt-72'>Batman</h2>
                        <button className='btn border-0 bg-orange-700'>Buy now</button>
                    </div>
                <div className='grid grid-flow-row gap-5'>
                <div className='h-80 w-80 text-white text-2xl text-center mandalorian mx-auto'>
                        <h2 className='text-4xl mb-4 font-extrabold mt-48 text-orange-100'>Mandalorian</h2>
                        <button className='btn border-0 bg-orange-700'>Buy now</button>
                    </div>
                    <div className='h-80 w-80 text-white text-2xl text-center deadpool mx-auto'>
                        <h2 className='text-4xl mb-4 font-extrabold mt-48 text-orange-100'>Deadpool</h2>
                        <button className='btn border-0 bg-orange-700'>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;