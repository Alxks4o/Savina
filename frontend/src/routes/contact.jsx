import React, { useState } from 'react';
import NavbarComponent from '../components/navbar';
import { Button, Card, Container, Form } from 'react-bootstrap';
import '../style/styles.css';
import Footer from '../components/footer';
import axios from 'axios'; 

const Contact = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:3000/send-email', {
                user_name: name, 
                user_email: email, 
                message: message
            });

            setResponseMessage(response.data.message); 
        } catch (error) {
            console.error('Error sending email:', error);
            setResponseMessage('Error sending email. Please try again later.');
        }
    };

    return (
        <>
            <Container>
                <NavbarComponent />
                <Container style={{ marginTop: '15rem', textAlign: 'center', width: '80%' }}>
                    <h1 style={{ fontSize: '4rem', color: 'white' }}>Contact me</h1>

                    <Container className='about-container'>
                        <Card
                            className='about-card'
                            style={{
                                textAlign: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.35)', 
                                color: 'rgb(65, 63, 63)',
                                border: 'none',
                                marginTop: '10rem',
                            }}
                        >
                            <Card.Body>
                                <Form style={{ padding: '1rem' }} onSubmit={handleSubmit}>
                                    <Form.Group style={{ marginTop: '1rem' }} controlId="formBasicName">
                                        <Form.Control
                                            style={{ backgroundColor: '#fff3e0' }}
                                            type="text"
                                            placeholder="Enter your name" // Added name input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} // Update state on input change
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group style={{ marginTop: '1rem' }} controlId="formBasicEmail">
                                        <Form.Control
                                            style={{ backgroundColor: '#fff3e0' }}
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} // Update state on input change
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group style={{ marginTop: '1rem' }} controlId="formBasicText">
                                        <Form.Control
                                            style={{ backgroundColor: '#fff3e0' }}
                                            as="textarea"
                                            rows={3}
                                            placeholder="Type your message here"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)} // Update state on input change
                                            required
                                        />
                                    </Form.Group>
                                    <Button style={{ marginTop: '1rem', width: '100%' }} variant='secondary' type="submit">
                                        Send
                                    </Button>
                                </Form>
                                {responseMessage && ( // Conditionally render the response message
                                    <div style={{ marginTop: '1rem', color: 'white' }}>
                                        {responseMessage}
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Container>
                </Container>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;
