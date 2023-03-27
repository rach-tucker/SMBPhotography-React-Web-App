import { Navbar, Nav, Container } from 'react-bootstrap';
import Brand from '../icons/smbp-logo1.jpg';
import '../CSS_Files/nav.css'


const Navigation = () => {
    return (
        <>
            <Navbar className='nav' collapseOnSelect expand='sm'>
                <Container className='navContainer'>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="mt-3 m-auto justify-content-between w-100" id='navbar'>
                            <img className='navlogo' src={Brand} alt='logo'/>
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


