import React from 'react';
import '../style/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import NavbarComponent from '../components/navbar';
import secondImage from '../images/image2.jpg';



const Homepage = () => {
  return (
    <>
    <NavbarComponent/>
    <Carousel style={{ maxWidth: '100vw',maxHeight:'100%', margin: '0 auto'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={secondImage}
          alt="First slide"
          style={{ height: '100vh', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={secondImage}
          alt="Second slide"
          style={{ height: '100vh', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={secondImage}
          alt="Third slide"
          style={{ height: '100vh', objectFit: 'cover'}}
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Homepage;