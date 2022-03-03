import React, { useEffect, useState } from "react";
import "./Booking";
import useAuth from '../../hooks/useAuth'
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Booking = () => {
    const { user } = useAuth();
  const { serviceId } = useParams();
  const [service, setService] = useState({});


  

  const email = sessionStorage.getItem("email");
  useEffect(() => {
    fetch(`https://polar-badlands-47307.herokuapp.com/singleProduct/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // data.email = email;
    // data.status = "pending";
    console.log(data);



    fetch("https://polar-badlands-47307.herokuapp.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);

    if (data.insertedId) {
      alert('Congratulations.Successfully Added The Order')
      
  }
  };

  return (
    <div>
      <h1>Booking Section</h1>

      <Container className='py-5' data-aos="zoom-in">
            <Row className='my-5' xs={1} sm={1} md={2}>
                <Col>
                <div className="col-md-8">
            <div className="details-img">
              <img className="w-100" src={service?.img} alt="" />
            </div>
            <h2>{service?.placeName}</h2>
            <p className="text-center">{service?.desc}</p>
            <h2 className="text-danger"> Price: {service?.price} $</h2>
            <h2 className="text-success"> Package: {service?.packType} </h2>
          </div>
                </Col>
                <Col>
                <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("img")}
                defaultValue={service?.img}
                className="p-2 m-2 w-100"
              />
              <input
                {...register("placeName")}
                defaultValue={service?.placeName}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("name")}
                defaultValue={service?.name}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("date")}
                // placeholder="Name"
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("email")}
                placeholder="email"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("price", { required: true })}
                defaultValue={service?.price}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("packType", { required: true })}
                defaultValue={service?.packType}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
             

              {errors.exampleRequired && <span>This field is required</span>}


              <div className='d-flex justify-content-center'>
                        <Link to='/myorders'> <button className='book-btn btn btn-info' type="submit">Book Now</button></Link>
                    </div>

             

              
            </form>
          </div>
                </Col>
            </Row>
        </Container>

     </div>
  );
};

export default Booking;