import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = () => {
    const [destinations, setDestinations] = useState([])

    const destSlice = destinations.slice(0, 6);

    useEffect(() => {
        fetch("https://polar-badlands-47307.herokuapp.com/packages")
            .then(res => res.json())
            .then(data=>setDestinations(data.destination))
            // .then(data=>console.log(data))

            
    }, [])
   
    return (
        <div>
            <div className="title text-center my-5 background">
               
                <div className="container my-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            destSlice.map(destination => <div className="col"
                            key={destination._id}
                            >
                                <div className="card">
                                    <img style={{height:"300px"}} src={destination.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{destination.placeName}</h5>
                                        <p className="card-text">{destination.desc}</p>
                                        <p className="price"> <strong>Price: ${destination.price}/day</strong></p>
                                    </div>
                                    <Link to={`/booking/${destination._id}`}><Button className= "btn-color" >Purchase</Button></Link>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;