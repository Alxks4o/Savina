import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import '../style/styles.css'; 
import logo from '../images/logo.png';
import instagram from '../images/link_icons/instagram.svg';
import vimeo from '../images/link_icons/vimeo.svg';
import linkedin from '../images/link_icons/linkedin.svg';

function NavbarComponent() {
  return (
    <Navbar expand="lg" fixed='top' className='navbar-line gradient-background'>
      <Navbar.Brand style={{ marginLeft: '45px', fontSize:'2rem', fontWeight:'bold', color: 'black'}} href="/">
        <img src={logo} style={{ width: '130px', height: '120px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'solid 2px', marginRight:'3rem'}} />
      <Navbar.Collapse id="basic-navbar-nav">
       <Nav className='custom-nav' style={{marginLeft:'3rem', marginRight:'3rem'}}>
          <Nav.Item>
            <Nav.Link target='_blank' href="https://vimeo.com/user210739517" className="nav-link hover-effect" style={{padding:'1rem'}}><img src={vimeo} style={{height:'2rem'}} /></Nav.Link>
            <Nav.Link target='_blank' href="https://uk.linkedin.com/in/savina-y" className="nav-link hover-effect" style={{padding:'1rem'}}><img src={linkedin} style={{height:'2rem'}} /></Nav.Link>
            <Nav.Link target='_blank' href="https://www.instagram.com/savina.y.media/#" className="nav-link hover-effect" style={{padding:'1rem'}}><img src={instagram} style={{height:'2rem'}} /></Nav.Link>
          </Nav.Item>
       </Nav>
        <Nav className="ms-auto custom-nav" style={{marginRight:'3rem'}}> 
          <Nav.Item>
            <Nav.Link href="/about" className="nav-link hover-effect">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/work" className="nav-link hover-effect">My Work</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link href="/contactme" className="nav-link hover-effect">Contact me</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
