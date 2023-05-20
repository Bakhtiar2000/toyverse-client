import React from 'react';

const YouMayLike = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className="text-3xl mb-4 text-center">You may also like</h1>
            <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className=' p-4'>
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/911214/dead-strange_marvel_silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>Dead Strange</h2>
                        <p className='text-sm'>Sixth scale figure</p>
                        <p className='font-bold'>$385</p>
                    </div>
                    <button className='btn btn-block bg-orange-500 border-0'>Add to cart</button>
                </div>
                <div className='p-4 ' >
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/907402/moff-gideon_star-wars_silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>Moff Gideon</h2>
                        <p className='text-sm'>Sixth scale figure</p>
                        <p className='font-bold'>$345</p>
                    </div>
                    <button className='btn btn-block bg-orange-500 border-0'>Add to cart</button>
                </div>
                <div className=' p-4'>
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/908284/hunter_star-wars_silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>Hunter</h2>
                        <p className='text-sm'>Sixth scale figure</p>
                        <p>from <span className='font-bold'>$250</span></p>
                    </div>
                    <button className='btn btn-block bg-orange-500 border-0'>Add to cart</button>
                </div>
                <div className=' p-4'>
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/9118413/black-adam-golden-armor-deluxe-version_dc-comics_silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>Black Adam</h2>
                        <p className='text-sm'>Sixth scale figure Accessory</p>
                        <p className='font-bold'>$285</p>
                    </div>
                    <button className='btn btn-block bg-orange-500 border-0'>Add to cart</button>
                </div>
                <div className=' p-4'>
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/909107/king-shark_dc-comics_silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>King Shark</h2>
                        <p className='text-sm'>Sixth scale figure</p>
                        <p>from <span className='font-bold'>$265</span></p>
                    </div>
                    <button className='btn btn-block bg-orange-500 border-0'>Add to cart</button>
                </div>
                <div className=' p-4'>
                    <div className='bg-gray-200 rounded py-2'>
                        <img className='mx-auto' src="https://www.sideshow.com/cdn-cgi/image/height=350,quality=75,f=auto/https://www.sideshow.com/storage/product-images/906305/captain-marvel_marvel_silo_sm.png" alt="" />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold'>Captain Marvel</h2>
                        <p className='text-sm'>Sixth scale figure</p>
                        <p className='font-bold'>$325</p>
                    </div>
                    <button className='btn btn-block bg-orange-500 border-0'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default YouMayLike;