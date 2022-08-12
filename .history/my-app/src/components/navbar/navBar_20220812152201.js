import logo from './logo512.png'
import './navBar.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function NavBar() {
  return (
    <div className="navBar">
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" />{' '}
          Logo
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            {/* <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#blog">Years</Nav.Link>
            <Nav.Link href="#about-us">Venues</Nav.Link>
            <Nav.Link href="#contact-us">Songs</Nav.Link>
            <Nav.Link href="#contact-us">map</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <div className="content">
        This is a content.
      </div>
    </div>
  );
}

Years Venues Songs Map Top 40 Playlists Tags Today

export default NavBar;

