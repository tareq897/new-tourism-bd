import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Package from '../Packages/Package';

const Home = () => {
    return (
        <div>

            <div>

            <Banner></Banner>

            </div>

            <div>
                <h2>Best Offers</h2>
                <h5>Check Out Our Top Rated Packages</h5>


            </div>

            <div>
                <Package></Package>
            </div>

        
            
        </div>
    );
};

export default Home;