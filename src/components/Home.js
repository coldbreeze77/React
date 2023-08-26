import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Home = () => {
  return (
    <>
   <Stack gap={3}>
      <div className="p-2"><h4 >Our vision:</h4>
      <Container>
        <Row>
          <Col>Our vision at Al-Maqam Al-Ali is to have a modern platform that is accessible to individuals of all ages to be able to learn How to read, memorize, and beautify their voices in the Quran Which will enlighten and impact their lives in the best way possible. We don’t want to just have Quran students, we want to have a family and a community that love each other for the sake of Allahand all here to learn the Quran and that’s one of the reasons why we have the chat and the weekly meetings.</Col>
        </Row>
      </Container>
      </div>
      <div className="p-2"><h4 >Our mission:</h4>
      <Container>
        <Row>
          <Col>Our Mission is to offer a personalized and comprehensive online Quranic school that gives each student what he/she needs. We aim to make the Quran learning accessible for you regardless where you are and anyone can join and learn on their own time as well.</Col>
        </Row>
      </Container>
      </div>

      <div className="p-2"><h4 > Our goal:</h4>
      <Container bg="primary" data-bs-theme="dark">
        <Row>
        <Col><h6 class="p-3 mb-2 bg-success text-white">Quranic learning</h6> Our goal is to break down any barriers to Quranic learning by offering convenient online courses that can be accessed from the comfort of your own home, in your free time, at your own pace, and from anywhere in the world.</Col>
          <Col><h6 class="p-3 mb-2 bg-success text-white">Quality Education:</h6> We provide top-notch Quranic education given by a qualified instructor who is well capable in both Quranic text and modern teaching methodologies.</Col>          
          <Col><h6 class="p-3 mb-2 bg-success text-white">Personalized learning</h6><br/> We offer a tailored teaching approach to ensure a fulfilling and effective learning experience</Col>
          <Col><h6 class="p-3 mb-2 bg-success text-white">Global Community</h6><br/>We want to create a diverse and vibrant online community of learners who share the same passion for the Quran. We will have discussions and try our best to foster connections that transcend borders.</Col>
          <Col><h6 class="p-3 mb-2 bg-success text-white">Life long Learning</h6><br/>Our goal is to also instill a love for continuous learning. We hope that the students develop a lifelong habit and love of exploring the depths of the Quran.</Col>
          <Col><h6 class="p-3 mb-2 bg-success text-white">Empowerment</h6><br/>We empower our students to put some time for the Quran during the day no matter how busy they are and to approach life’s challenges with confidence while following and using the guide of the Quran.</Col>
        </Row>
      </Container>
      </div>     
      <div className="p-2" >    
          Join us at Al-Maqam Al-Ali on this enlightening journey to connect with the Quran, Expand our knowledge, and enrich our lives through and with the Quran. Together, let’s help each other stay on the right path in this world so In’Sha’Allah we can pass the path to Paradise on the day of Judgement and be gathered with prophet Muhammad S.A.W
      </div>     
      
    </Stack>
    
   </>
    
  )
}
