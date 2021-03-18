import React,{Component} from 'react'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import first from './c4.jpg'
import second from './c2.jpg'
import third from './c3.jpg'
import { Carousel } from 'react-bootstrap';
class CustomCarousel extends Component
{
    render()
    {
        return(
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={first} />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" src={second} />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={third}  />
  </Carousel.Item>
</Carousel>
        
        );
    }
}

export default CustomCarousel;