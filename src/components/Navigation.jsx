import { Navbar, Nav, Container } from 'react-bootstrap';
import { ReactComponent as Brand } from '../icons/logo.svg';


const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="mt-3 m-auto justify-content-between w-100" id='navbar'>
                            <Brand/>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/about'>About Me</Nav.Link>
                            <Nav.Link href='/gallery'>Gallery</Nav.Link>
                            <Nav.Link href='/contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Navigation;


