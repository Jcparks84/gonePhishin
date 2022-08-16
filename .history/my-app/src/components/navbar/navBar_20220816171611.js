import logo from '../images/phish.png'
import './navBar.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import AudioPlayer from '../audioPlayer/audioPlayer';
import YearPage from '../../pages/yearPage/yearPage';



function NavBar() {
  return (
    <div className="navBar">
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="70px" height="60px" />{' '}
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Years">
              <NavDropdown.Item href="#years/2021">2021</NavDropdown.Item>
              <NavDropdown.Item href="#years/2020">2020</NavDropdown.Item>
              <NavDropdown.Item href="#years/2019">2019</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Venues">Venues</Nav.Link>
            <Nav.Link href="#contact-us">Songs</Nav.Link>
            <Nav.Link href="#contact-us">Map</Nav.Link>
            <Nav.Link href="#contact-us">Top 40</Nav.Link>
            <LinkContainer to="/service">
            <Nav.Link href="YearPage">Years</Nav.Link>
            </LinkContainer>



          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  );
}


export default NavBar;

