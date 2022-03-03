import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";



const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>TRIP <i className='fab fa-typo3'></i></h1>
                <p>Uttara,
 Dhaka</p>
                <div className="icons-container d-flex text-center ">
                  
                  <div className="icon">
                  <i className="bi bi-instagram"></i>
                  </div>
                  <div className="icon">
                  <i class="bi bi-facebook"></i>
                  </div>
                  <div className="icon">
                  <i className="bi bi-youtube"></i>
                  </div>
                  <div className="icon">
                  <i className="bi bi-twitter"></i>
                  </div>
                </div>
                

              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container deep">
                <ul>
                  <li className="footer-menu deep">News & Media</li>
                  <li className="footer-menu deep">Careeer</li>
                  <li className="footer-menu deep">Facilities</li>
                  <li className="footer-menu deep"> MRD Services</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
             
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                  
                  </div>
                  <div>
                    <h5 className="deep text-danger">Contact</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                 
                  <div>
                    <p>
                    Hotline: +96685607000
                      <br /> Hotline 2: +966834743444
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Footer;