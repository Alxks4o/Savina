import React from 'react'
import NavbarComponent from '../components/navbar'
import '../style/styles.css'
import { Button, Card, Container } from 'react-bootstrap'
import firstImage from '../images/picture3.png'
import Footer from '../components/footer'


const About = () => {
    return (
        <>
            <NavbarComponent />
            <Container >
                <Container style={{ marginTop: '5rem', textAlign: 'center', width: '80%' }}>
                    <h1 style={{ fontSize: '4rem', color: 'white' }}>About</h1>

                    <Container style={{ marginTop: '0' }} className="content-container">
                        <Card className="about-card"
                            style={{
                                textAlign: 'center',
                                backgroundColor: 'rgba(247, 112, 202, 0.53)', // Overlay effect
                                color: 'rgb(65, 63, 63)',
                                border: 'none',
                                maxWidth: '30rem',
                                margin: '2rem'
                            }}>
                            <Card.Img variant="top" src={firstImage} />
                            <Card.Body>
                                <Card.Text
                                    className='card-text'
                                    style={{
                                        fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                                        lineHeight: '1.6',
                                        borderBottom: '2px solid',
                                        padding: 'clamp(1rem, 3vw, 2rem) 0',
                                        marginBottom: '2rem'
                                    }}
                                >
                                    As a creative enthusiast, my journey began at the Pauline Quirke Academy of Performing Arts, where I delved into drama, musical theatre, film, and television. This four-year experience sparked a passion for behind-the-scenes work, leading me to pursue media studies in college. There, I honed skills in moving image, photography, graphic design, and sound production. <br /><br />
                                    Currently pursuing a bachelor's degree with honours in creative film, television, and digital media at the University of Northampton, I've continued to expand my knowledge. Through hands-on projects like recognized music and factual productions which have been shortlisted in Dudley Artsfest 2022 and 2023. I've mastered Adobe tools and acquired diverse skills. Training in leadership, public speaking, and resilience supported my roles in various classes. <br /><br />
                                    Additionally, I completed a UI design fundamentals course from SoftUni Creative, enhancing my creative expertise. My journey reflects a commitment to artistic excellence and a continuous drive to explore new creative horizons.
                                </Card.Text>
                                <Button style={{ borderRadius: '2rem', marginTop: '2rem' }} variant="secondary">Download CV</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </Container>
            </Container>
            <Footer />
        </>
    )
}

export default About