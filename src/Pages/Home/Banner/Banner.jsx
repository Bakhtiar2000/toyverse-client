import React from 'react';
import banner1 from '/assets/Banner/banner-1.png'
import banner2 from '/assets/Banner/banner-2.png'
import banner3 from '/assets/Banner/banner-3.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Banner = () => {
    return (

        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-8 bottom-0">
                    <a href="#slide3" className="btn bg-yellow-700 btn-square btn-sm md:btn-lg"><FaArrowLeft/></a>
                    <a href="#slide2" className="btn bg-yellow-700 btn-square btn-sm md:btn-lg"><FaArrowRight/></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-8 bottom-0">
                    <a href="#slide1" className="btn bg-yellow-700 btn-square btn-sm md:btn-lg"><FaArrowLeft/></a>
                    <a href="#slide3" className="btn bg-yellow-700 btn-square btn-sm md:btn-lg"><FaArrowRight/></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-8 bottom-0">
                    <a href="#slide2" className="btn bg-yellow-700 btn-square btn-sm md:btn-lg"><FaArrowLeft/></a>
                    <a href="#slide1" className="btn bg-yellow-700 btn-square btn-sm md:btn-lg"><FaArrowRight/></a>
                </div>
            </div>
        </div>

    );
};

export default Banner;

{/* <div className='my-auto w-80 px-6 pt-4 md:px-0 md:pt-0'>
                    <p className='text-sm'>Big fun for kids</p>
                    <h2 className='text-3xl font-semibold'>Where imagination takes shape</h2>
                    <p>Welcome to Toy Verse, a leading producer of realistic toys that bring joy and imagination to life!</p>
                </div> */}