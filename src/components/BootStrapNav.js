import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Logo from '../images/Univeristy2.jpg'
import Logo from '../images/Al-Maqam-University.jpg'
import Image from 'react-bootstrap/Image'
import { Col, Row } from 'react-bootstrap';


function BootStrapNav() {
    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark"  fluid>  
        <container>
            <Row>
                <Col><Image class='img' src={Logo} roundedCircle /><h6 class="text-white">  المقام العلي  </h6></Col>
                <Col width='70%'><h3 class="text-white">Al-Maqam Al-Ali University</h3></Col>
            </Row>
        </container>
          
                    
        </Navbar>
        <Navbar bg="dark" data-bs-theme="dark">            
            <Container>
                <Nav className="me-auto">
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href='/Courses'>Courses</Nav.Link>
                  <Nav.Link href='/Services'>Services</Nav.Link>    
                  <Nav.Link href='/Shop'>Shop</Nav.Link>
                  <Nav.Link href='/Membership'>Membership</Nav.Link>   
                  <Nav.Link href='/Registration'>Registration</Nav.Link>   
                  <Nav.Link href='/About'>About me</Nav.Link>   
                </Nav>
            </Container>
        </Navbar>        
    </>
    )
  }
  export default BootStrapNav;

