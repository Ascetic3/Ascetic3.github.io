import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';



function AppHeader() {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#">Corporate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="contact" onClick={() => setExpanded(false)}>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default AppHeader;