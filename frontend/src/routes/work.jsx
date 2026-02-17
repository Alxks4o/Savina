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
            <NavbarComponent />
            <Container>
                <h1 style={{ fontSize: '4rem', color: 'white', marginTop: '5rem', textAlign: 'center' }}>My Work</h1>
                <Container style={{ margin: '0' }} className="content-container">

                    <Stack style={{ margin: 0 }} direction="horizontal" gap={5} className="justify-content-center">
                        <Card style={{
                            margin: 0,
                            maxWidth: '25rem',
                            textAlign: 'center',
                            backgroundColor: 'rgba(255, 142, 217, 0.28)',
                            color: 'white',
                            border: 'none',
                        }}>
                            <Card.Img variant="top" src={image1} href='/' />
                            <Card.Body style={{ wordBreak: 'keep-all' }}>
                                <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold', wordBreak: 'keep-all' }}>
                                    Moving Image
                                </Card.Title>
                                <Card.Text style={{ fontSize: '1.1em' }}>2023</Card.Text>
                                <Button variant="light" href='/movingimage'>Moving Image</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{
                            margin: 0,
                            maxWidth: '25rem',
                            textAlign: 'center',
                            backgroundColor: 'rgba(255, 142, 217, 0.28)',
                            color: 'white',
                            border: 'none',
                        }}>
                            <Card.Img variant="top" src={image2} href='/' />
                            <Card.Body style={{ wordBreak: 'keep-all' }}>
                                <Card.Title style={{ fontSize: '2rem', fontWeight: 'bold', wordBreak: 'keep-all' }}>
                                    Photography
                                </Card.Title>
                                <Card.Text style={{ fontSize: '1.1em' }}>2023</Card.Text>
                                <Button variant="light" href='/photography'>Photography</Button>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Container>
            </Container>
            <Footer />
        </>
    )
}

export default Work
