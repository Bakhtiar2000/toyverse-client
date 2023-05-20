import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import YouMayLike from '../YouMayLike/YouMayLike';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div className='px-3'>
           <Banner></Banner>
           <Gallery></Gallery>
           <ShopByCategory></ShopByCategory>
           <YouMayLike></YouMayLike>
           <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;