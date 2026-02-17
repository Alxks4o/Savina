import React from 'react'
import NavbarComponent from '../components/navbar'
import '../style/styles.css'
import { Button, Card, Container, Spinner, Stack } from 'react-bootstrap'
import image1 from '../images/image1.png'
import image2 from '../images/image2.jpg'


const MovingImage = () => {
  return (
    <>
      <NavbarComponent />
      <Container style={{ marginTop: '20rem', textAlign: 'center' }}>
        <h1>Moving Image</h1>
        <p>A dive into my creative world showcasing film edits, trailers, and documentary. From college to university, witness the progression of my projects, each being distinct to the next. Welcome to my portfolio of cinematic endeavours!</p>
      </Container>
    </>
  )
}

export default MovingImage