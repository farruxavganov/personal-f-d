import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" bg="primary">
      <Container fluid>
        <Navbar.Brand href="#">PFD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to="/" className='text-decoration-none text-white'>Home</Link></Nav.Link>
            <Nav.Link><Link to="add-transaction" className='text-decoration-none text-white'>Add Transaction</Link></Nav.Link>
            <Nav.Link> <Link to="dashboard" className='text-decoration-none text-white'>Dashboard</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;