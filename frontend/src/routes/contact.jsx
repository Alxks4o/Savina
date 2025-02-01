import React from 'react'
import NavbarComponent from '../components/navbar'
import { Button, Card, Container, Form } from 'react-bootstrap'
import '../style/styles.css'
import Footer from '../components/footer'
const Contact = () => {
  return (
    <>
        <Container>
            <NavbarComponent/>
            <Container  style={{ marginTop: '15rem', textAlign: 'center', width: '80%' }}>
                <h1 style={{ fontSize: '4rem', color: 'white'}}>Contact me</h1>

                <Container className='about-container'>
                        <Card className='about-card'
                            style={{
                                textAlign: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.35)', // Overlay effect
                                color: 'rgb(65, 63, 63)',
                                border: 'none',
                                marginTop:  '10rem',
                            }}
                        >
                            <Card.Body>
                                <Form style={{padding:'1rem'}}>
                                    <Form.Group style={{marginTop:'1rem'}} controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </Form.Group>
                                    <Form.Group style={{marginTop:'1rem'}} controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group style={{marginTop:'1rem'}} controlId="formBasicText">
                                        <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
                                    </Form.Group>
                                    <Button style={{marginTop:'1rem', width:'100%'}} variant='secondary'>Send</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                </Container>
            </Container>
        </Container>
        <Footer/>
    </>
  )
}

export default Contact