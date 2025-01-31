import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import '../style/styles.css'; 


function NavbarComponent() {
  return (
    <Navbar expand="lg" fixed='top' className='navbar-line gradient-background'>
      <Navbar.Brand style={{ marginLeft: '45px', fontSize:'2rem', fontWeight:'bold', color: 'black'}} href="/">
        Savina Yonashkova
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'solid 2px' }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto custom-nav"> 
          <Nav.Item>
            <Nav.Link href="/aboutus" className="nav-link hover-effect">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/aboutus" className="nav-link hover-effect">My Work</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/aboutus" className="nav-link hover-effect">Contact me</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
