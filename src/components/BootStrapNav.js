import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Univeristy2.jpg'
import Image from 'react-bootstrap/Image'


function BootStrapNav() {
    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark">  
        <table>
            <tr>                
                <td width="25%" align='left'> <Image width="40%" height="40%" src={Logo} roundedCircle /> <br/>المقام العلي</td>
                <td width="75%" align='right' ><h2>Al-Maqam Al-Ali University </h2></td>                
            </tr>
        </table>     
                    
        </Navbar>
        <Navbar bg="dark" data-bs-theme="dark">            
            <Container>
                <Nav className="me-auto">
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href='/Courses'>Courses</Nav.Link>
                  <Nav.Link href='/Services'>Services</Nav.Link>    
                  <Nav.Link href='/Shop'>Shop</Nav.Link>
                  <Nav.Link href='/Membership'>Membership</Nav.Link>   
                  <Nav.Link threfo='/Contact'>Contact</Nav.Link>   
                </Nav>
            </Container>
        </Navbar>        
    </>
    )
  }
  export default BootStrapNav;

