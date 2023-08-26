import React from 'react'
//import ListGroup from 'react-bootstrap/ListGroup';
//import Card from 'react-bootstrap/Card';
//import Stack from 'react-bootstrap/Stack';
//import Button from 'react-bootstrap/Button';
import QuranImage from '../images/Quran.jpg'
import IslamicBooksImage from '../images/IslamicBooks.jpg'
import MenThobeImage from '../images/men_thobe.jpg'
import HijabGirlImage from '../images/girl_in_hijab.jpg'
import BoyKurtaImage from '../images/Boy_Kurta.jpg'

//import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';


export const Shop = () => {
  return (
    <>
      <br/><br/>
    <Container>
      <Row>
        <Col>
          <Figure>
          <Figure.Image width={171} height={180} alt="" src={QuranImage} rounded/>
          <Figure.Caption> <h4>Quran</h4> </Figure.Caption>
          </Figure>
        </Col>     
  
        <Col>
       
          <Figure>
            <Figure.Image width={171} height={180} alt="" src={IslamicBooksImage}  rounded/>
            <Figure.Caption> <h4>Islamic books</h4> </Figure.Caption>
          </Figure>
        
        </Col>      
      </Row>
      <Row>
      <br/><br/><br/>
      </Row>
        
    </Container>

   
    <Container>
      <Row> <h4>Islamic clothings</h4> <br/><br/><br/><br/>
      </Row>
     <Row>
        <Col>
       
          <Figure>
          <Figure.Image width={171} height={180} alt="" src={MenThobeImage} rounded/>
          <Figure.Caption> <b>Men</b>  </Figure.Caption>
          </Figure>
          <p>Thobes, Headwear, Accessories</p>
        </Col>  
        
        <Col>
          <Figure>
            <Figure.Image width={171} height={180} alt="" src={BoyKurtaImage} rounded/>
            <Figure.Caption> <b>Boys</b></Figure.Caption>
          </Figure>   
          <p>Thobes, Headwear, Accessories</p>    
        </Col>
        <Col>
          <Figure>
          <Figure.Image width={171} height={180} alt="" src={HijabGirlImage} rounded/>
          <Figure.Caption> <b>Women</b>  </Figure.Caption>
          </Figure>
          <p>Abaya’s, Prayer wear, Headwear, Accessories</p>
        </Col>    
      
        <Col>
          <Figure>
          <Figure.Image width={171} height={180} alt="" src={HijabGirlImage} rounded/>
          <Figure.Caption> <b>Girls</b></Figure.Caption>
          </Figure>
          <p> Abaya, Thobes, Headwear, Accessories</p>          
        </Col>
      </Row>
    </Container>

   

    </>
  )
}
