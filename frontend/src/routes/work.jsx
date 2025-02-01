import React from 'react'
import NavbarComponent from '../components/navbar'
import '../style/styles.css'
import { Button, Card, Container, Stack } from 'react-bootstrap'
import image1 from '../images/image1.png'
import image2 from '../images/image2.jpg'
import Footer from '../components/footer'

const Work = () => {
  return (
    <>
        <Container>
            <NavbarComponent/>
            <Container className="content-container">
                <Stack direction="horizontal" gap={5} className="justify-content-center">
                    <Card   style={{
                        maxWidth: '25rem',
                        height: '25rem',
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 142, 217, 0.28)', // Overlay effect
                        color: 'white',
                        border: 'none',
                    }}>
                        <Card.Img variant="top" src={image1} href='/' />
                        <Card.Body>
                            <Card.Title style={{fontSize:'2rem', fontWeight:'bold'}}>Moving Image</Card.Title>
                            <Card.Text style={{fontSize:'1.1rem'}}>2023</Card.Text>
                            <Button variant="light" href='/movingimage'>Moving Image</Button>
                        </Card.Body>
                    </Card>
                    <Card   style={{
                        maxWidth: '25rem',
                        height: '25rem',
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 142, 217, 0.28)', // Overlay effect
                        color: 'white',
                        border: 'none',
                    }}>
                        <Card.Img variant="top" src={image2} href='/' />
                        <Card.Body>
                            <Card.Title style={{fontSize:'2rem', fontWeight:'bold'}}>Photography</Card.Title>
                            <Card.Text style={{fontSize:'1.1rem'}}>2023</Card.Text>
                            <Button variant="light" href='/photography'>Photography</Button>
                        </Card.Body>
                    </Card>  
                </Stack>
            </Container>
        </Container>
        <Footer/>
    </>
  )
}

export default Work
