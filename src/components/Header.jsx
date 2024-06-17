import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <header>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">nc News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Topics" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Coding</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Football</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cooking</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}