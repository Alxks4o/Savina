import React from 'react'
import NavbarComponent from '../components/navbar'
import '../style/styles.css'
import { Button, Card, Container, Spinner, Stack } from 'react-bootstrap'
import image1 from '../images/image1.png'
import image2 from '../images/image2.jpg'
import Footer from '../components/footer'


const MovingImage = () => {
  return (
   <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
  <NavbarComponent />

  <Container
    style={{
      marginTop: '20rem',
      textAlign: 'center',
      flex: 1   // THIS is the missing piece
    }}
  >
    <h1
      style={{
        fontSize: 'clamp(1.8rem, 5vw, 3rem)',
        fontWeight: '600',
        marginBottom: '1rem'
      }}
    >
      This section will be added shortly
    </h1>

    <p
      style={{
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        opacity: 0.8,
        marginTop: '1rem'
      }}
    >
      Thank you for your patience — new content is on the way.
    </p>
  </Container>

  <Footer />
</div>
  )
}

export default MovingImage