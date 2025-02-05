import React from 'react';
import NavbarComponent from '../components/navbar';
import '../style/styles.css';
import { Col, Container, Row } from 'react-bootstrap';


//Golden AUtumn
import image1 from '../images/photographyGoldenAutumn/photo1.jpg';
import image2 from '../images/photographyGoldenAutumn/photo2.jpg';
import image3 from '../images/photographyGoldenAutumn/photo3.jpg';
import image4 from '../images/photographyGoldenAutumn/photo4.jpg';
import image5 from '../images/photographyGoldenAutumn/photo5.jpg';
import image6 from '../images/photographyGoldenAutumn/photo6.jpg';
import image7 from '../images/photographyGoldenAutumn/photo7.jpg';
import image8 from '../images/photographyGoldenAutumn/photo8.jpg';
import image9 from '../images/photographyGoldenAutumn/photo9.jpg';
import image10 from '../images/photographyGoldenAutumn/photo10.jpg';
import image11 from '../images/photographyGoldenAutumn/photo11.jpg';
import image12 from '../images/photographyGoldenAutumn/photo12.jpg';
import image13 from '../images/photographyGoldenAutumn/photo13.jpg';
import image14 from '../images/photographyGoldenAutumn/photo14.jpg';
import image15 from '../images/photographyGoldenAutumn/photo15.jpg';


//Autumns 2024
import photo1 from '../images/Autumn2024/photo1.jpg';
import photo2 from '../images/Autumn2024/photo2.jpg';
import photo3 from '../images/Autumn2024/photo3.jpg';
import photo4 from '../images/Autumn2024/photo4.jpg';
import photo5 from '../images/Autumn2024/photo5.jpg';
import photo6 from '../images/Autumn2024/photo6.jpg';


//Covent Garden
import covent1 from '../images/CoventGarden/photo1.jpg';
import covent2 from '../images/CoventGarden/photo2.jpg';
import covent3 from '../images/CoventGarden/photo3.jpg';
import covent4 from '../images/CoventGarden/photo4.jpg';


//British Museum
import british1 from '../images/BritishMuseum/photo1.jpg';
import british2 from '../images/BritishMuseum/photo2.jpg';
import british3 from '../images/BritishMuseum/photo3.jpg';
import british4 from '../images/BritishMuseum/photo4.jpg';
import british5 from '../images/BritishMuseum/photo5.jpg';
import british6 from '../images/BritishMuseum/photo6.jpg';
import british7 from '../images/BritishMuseum/photo1.jpg';
import british8 from '../images/BritishMuseum/photo2.jpg';
import british9 from '../images/BritishMuseum/photo3.jpg';
import british10 from '../images/BritishMuseum/photo4.jpg';
import british11 from '../images/BritishMuseum/photo5.jpg';
import british12 from '../images/BritishMuseum/photo6.jpg';
import british13 from '../images/BritishMuseum/photo1.jpg';
import british14 from '../images/BritishMuseum/photo2.jpg';
import british15 from '../images/BritishMuseum/photo3.jpg';
import british16 from '../images/BritishMuseum/photo4.jpg';
import british17 from '../images/BritishMuseum/photo5.jpg';
import british18 from '../images/BritishMuseum/photo6.jpg';
import british19 from '../images/BritishMuseum/photo1.jpg';
import Footer from '../components/footer';




const Photography = () => {
  return (
    <>
    <Container>
      <NavbarComponent />
      <Container style={{ marginTop: '15rem', textAlign: 'center', width: '80%' }}>
        <h1 style={{ fontSize: '4rem', color: 'white' }}>Photography</h1>
        <p style={{ marginTop: '6rem', fontSize: '1.2rem' }}>
          Welcome to my photography section – a visual diary where moments freeze in time. Explore a world of images that speak louder than words, each frame telling a unique story captured through my lens. Join me in this visual journey, one snapshot at a time.
        </p>


        <Container style={{ marginTop: '6rem'}}>
          <p style={{ fontSize: '1.4rem', fontWeight:'bold'}}>"Golden Autumn"</p>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} style={{ width: '100%' }}>
            <Col>
              <img
                src={image1}
                alt="image1"
                style={{
                  width: '100%',
                  height: '250px', 
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image2}
                alt="image2"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image3}
                alt="image3"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image4}
                alt="image4"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image5}
                alt="image5"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image6}
                alt="image6"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'                  
                }}
              />
            </Col>
            <Col>
              <img
                src={image7}
                alt="image7"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image8}
                alt="image8"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image9}
                alt="image9"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image10}
                alt="image10"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image11}
                alt="image11"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image12}
                alt="image12"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image13}
                alt="image13"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image14}
                alt="image14"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={image15}
                alt="image15"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
          </Row>
          <p style={{ marginTop: '3rem', fontSize: '1.2rem' }}>My "Golden Autumn" photography collection from my visit in Varna, Bulgaria this November 2024. </p>
          <p style={{ marginTop: '1.5rem', fontSize: '1.2rem' }}>This collection portrays what you see in the colourful everyday life in Varna. Mostly being stray cats, people reading on the bus, almost naked trees from which the leaves that have fallen, transform into a golden carpet creating a path which leads to the Opera of Varna for a good end to those ideal Autumn days.</p>     
        </Container>

        <Container style={{marginTop:'4rem'}}>
          <p style={{ fontSize: '1.4rem', fontWeight:'bold'}}>Autumn 2024</p>
        </Container>


        <Container>
            <Row xs={1} sm={2} md={3} lg={4} xl={6} style={{ width: '100%' }}>
            <Col>
              <img
                src={photo1}
                alt="image1"
                style={{
                  width: '100%',
                  height: '250px', 
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={photo2}
                alt="image1"
                style={{
                  width: '100%',
                  height: '250px', 
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={photo3}
                alt="image1"
                style={{
                  width: '100%',
                  height: '250px', 
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={photo4}
                alt="image1"
                style={{
                  width: '100%',
                  height: '250px', 
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={photo5}
                alt="image1"
                style={{
                  width: '100%',
                  height: '250px', 
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            <Col>
              <img
                src={photo6}
                alt="image1"
                style={{
                  width: '100%',
                  height: '250px', 
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1rem'
                }}
              />
            </Col>
            </Row>
            <p style={{ marginTop: '3rem', fontSize: '1.2rem' }}>A few of my photographs from the pumpkin/autumn season.</p>
        </Container>
        

        <Container style={{marginTop:'4rem'}}>
          <p style={{ fontSize: '1.4rem', fontWeight:'bold'}}>London | Covent Garden 16/12/2023</p>
        </Container>


        <Container style={{marginTop:'4rem'}}>
            <Row xs={1} sm={2} md={3} lg={4} xl={2} style={{ width: '100%' }}>
                <Col>
                  <img
                    src={covent1}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={covent2}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={covent3}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={covent4}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
            </Row>
            <p style={{ marginTop: '3rem', fontSize: '1.2rem' }}>Practising with the Canon M50 mark II</p>
        </Container>

        
        <Container style={{marginTop:'4rem'}}>
          <p style={{ fontSize: '1.4rem', fontWeight:'bold'}}>The British Museum 16/12/2023</p>
        </Container>
        
        
        <Container style={{marginTop:'4rem', marginBottom:'15rem'}}>
            <Row xs={1} sm={2} md={3} lg={4} xl={4} style={{ width: '100%' }}>
                <Col>
                  <img
                    src={british1}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british2}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british3}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british4}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british5}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british6}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british7}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british8}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british9}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british10}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british11}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british12}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british13}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british14}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british15}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british16}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british17}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british18}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src={british19}
                    alt="image1"
                    style={{
                      width: '100%',
                      height: '250px', 
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      marginBottom: '1rem'
                    }}
                  />
                </Col>
            </Row>
            <p style={{ marginTop: '3rem', fontSize: '1.2rem' }}>Practising with the Canon M50 mark II</p>
        </Container>

      </Container>
    </Container>
    <Footer/>
    </>
  );
};

export default Photography;
