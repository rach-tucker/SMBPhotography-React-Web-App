import { Navbar, Nav, Container } from 'react-bootstrap';
import { ReactComponent as Brand } from '../icons/logo.svg';
import '../CSS_Files/nav.css'


const Navigation = () => {
    return (
        <>
            <Navbar className='nav' collapseOnSelect expand='sm'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="mt-3 m-auto justify-content-between w-100" id='navbar'>
                            <Brand/>
                            <Nav.Link className='navText' href='/'>Home</Nav.Link>
                            <Nav.Link className='navText' href='/about'>About Me</Nav.Link>
                            <Nav.Link className='navText' href='/gallery'>Gallery</Nav.Link>
                            <Nav.Link className='navText' href='/contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Navigation;


