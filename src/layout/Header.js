import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();
    function logout()
    {
        localStorage.clear();
        navigate('/login')
        
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link to="/product/add">Add Product</Link>
                                    <Link to="/product/update">Update Product</Link>
                                </>
                                :
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/registration">Registration</Link>
                                </>
                        }



                    </Nav>
                    {
                        localStorage.getItem('user-info') ?
                        <Nav>
                        <NavDropdown title={user.name.toUpperCase()}>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Item>Setting</NavDropdown.Item>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> :""
                    }
                    
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;