import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const YouMayLike = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className="text-center font-semibold md:text-5xl text-3xl text-yellow-950 my-8">You may also like</h1>
            <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div data-aos="zoom-in"
                    data-aos-offset="20"
                    data-aos-delay="5"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className=' p-4'>
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
                <div data-aos="zoom-in"
                    data-aos-offset="20"
                    data-aos-delay="5"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className='p-4 ' >
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
                <div data-aos="zoom-in"
                    data-aos-offset="20"
                    data-aos-delay="5"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className=' p-4'>
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
                <div data-aos="zoom-in"
                    data-aos-offset="20"
                    data-aos-delay="5"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className=' p-4'>
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
                <div data-aos="zoom-in"
                    data-aos-offset="20"
                    data-aos-delay="5"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className=' p-4'>
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
                <div data-aos="zoom-in"
                    data-aos-offset="20"
                    data-aos-delay="5"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className=' p-4'>
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