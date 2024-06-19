import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../assets/Logo.png"
import { useEffect, useState } from 'react';
import { checkUser } from '../middlewares/CheckUser';

export default function NavBar() {
  const [userStatus, setUserStatus] = useState(false);

  const fetchUserStatus = async () => {
    const checkedUser = await checkUser();
    setUserStatus(checkedUser);
  };

  useEffect(() => {
    fetchUserStatus();
  }, []);

  return (
    <Navbar  fixed="top" collapseOnSelect expand="lg" style={{ backgroundColor: "white" }} >
      <Container>
        <Navbar.Brand href="/"><img style={{ height: "30px" }} src={Logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="explore">Explore</Nav.Link>
            <Nav.Link href="#pricing">Search</Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ICC Cricket</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">IPL Cricket</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Musical Event</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Theatre and Performing Arts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Football Match</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Theme Parks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Attractions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Fairs and Expos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {userStatus? <Nav.Link href="#pricing">Sell</Nav.Link> : ''}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link eventKey={2} href={userStatus? "/#profile": "/signup"}>
              {userStatus ? "Profile" : "Switch to Selling"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

