import React from 'react';
import '../style/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Carousel, Container } from 'react-bootstrap';
import NavbarComponent from '../components/navbar';
import secondImage from '../images/picture2.jpg';
import firstImage from '../images/picture1.jpg';
import Footer from '../components/footer';

const Homepage = () => {
  return (
    <>
      <NavbarComponent/>
      <Carousel style={{ maxWidth: '100vw', maxHeight: '100%', margin: '0 auto' }}>
      <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              className="d-block w-100"
              src={firstImage}
              alt="Second slide"
              style={{ height: '100vh', objectFit: 'cover' }}
            />
            <Card
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '80%',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Overlay effect
                color: 'white',
                padding: '20px',
                marginTop:'2rem'
              }}
            >
              <Card.Body>
                <Card.Title style={{fontSize:'4rem'}}>Savina Yonashkova</Card.Title>
                <Card.Text style={{fontSize:'1.2rem'}}>
                I'm a passionate creative explorer dedicated to mastering the art of multimedia storytelling and design.
                </Card.Text>
                <Button variant='secondary' style={{borderRadius:'2rem' }} href='/about'>CLICK HERE TO ENTER</Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              className="d-block w-100"
              src={secondImage}
              alt="Second slide"
              style={{ height: '100vh', objectFit: 'cover' }}
            />
            <Card
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '80%',
                textAlign: 'center',
                backgroundColor: 'rgba(53, 52, 52, 0.6)', // Overlay effect
                color: 'white',
                padding: '20px',
                marginTop:'2rem'
                
              }}
            >
              <Card.Body>
                <Card.Title style={{fontSize:'4rem'}}>Savina Yonashkova</Card.Title>
                <Card.Text  style={{fontSize:'1.2rem'}}> 
                I'm a passionate creative explorer dedicated to mastering the art of multimedia storytelling and design.
                </Card.Text>
                <Button variant='secondary' style={{borderRadius:'2rem'}} href='/about'>CLICK HERE TO ENTER</Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
      <Footer/>
    </>
  );
};

export default Homepage;
