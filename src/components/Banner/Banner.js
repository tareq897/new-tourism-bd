import React from 'react';
import './Banner.css';
import Nature from "../video/video-1.mp4"

const Banner = () => {
    return (
        <div className='banner'>
         

           <video autoPlay loop muted>
               <source src={Nature} type="video/mp4"/>
           </video>
            <h1>Lets  Explore  Together</h1>
        </div>
    );
};

export default Banner;