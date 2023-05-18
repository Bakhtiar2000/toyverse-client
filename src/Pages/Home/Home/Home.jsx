import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div className='max-w-[1680px] mx-auto my-5'>
           <Banner></Banner>
           <Gallery></Gallery>
           <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;