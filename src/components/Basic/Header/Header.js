import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Container, Navbar, Nav, Button} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import '../Header/Header.css'


const Header = () => {

    const {user, logOut} = useAuth();
    return (
        <div>

<nav class="navbar navbar-expand-sm navbar navbar-dark bg-dark">
  <div class="container-fluid">
      <Navbar>
          <Container>
          <Navbar.Brand href="#home">TRIP <i className='fab fa-typo3'></i></Navbar.Brand>
          <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end fw-bold">
          <Nav.Link as={HashLink} to="/home"><span style={{color:'white'}}>Home</span></Nav.Link>
          <Nav.Link as={HashLink} to="/home#explore"><span style={{color:'white'}}>Packages</span></Nav.Link>
      <Nav.Link as={HashLink} to="/about"><span style={{color:'white'}}>About</span></Nav.Link>




        {
            user?.email && <div>

<Nav.Link as={Link}   to="/booking"><span style={{color:'white'}}>My Booking </span></Nav.Link>


            </div>
        }


      
{
                              user?.email && <div>
                                <Nav.Link as={Link}  to="/handlebooking"><span style={{color:'white'}}>Manage Users </span></Nav.Link>
                              
                              </div>
                            }
                            
                            
                            {


                             user?.email && <div>
                               <Nav.Link as={Link} to="/newevent"><span style={{color:'white'}}>New Event </span></Nav.Link>
          </div>
                            }

<Navbar.Text>
     <a href="#login"><span style={{color:'white'}}>{user.displayName}</span></a>
      </Navbar.Text>

      {user?.email?
        <Button onClick={logOut} variant="danger">Logout</Button> :
        <Nav.Link as={Link} className="fw-bold" to="/login"><span style={{color:'white'}}>Login</span></Nav.Link>}




          </Navbar.Collapse>
          </Container>
      </Navbar>
    
   
   
  </div>
</nav>
         
        </div>
    );
};

export default Header;