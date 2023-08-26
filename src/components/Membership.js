import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
//import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

export const Membership = () => {
  return (
    <>
     <br/><br/>
    <p class='warning'> <h3> Sheikh - please provide some additional context for this page in few lines </h3></p>
    <br/><br/>
    <Stack gap={3}>
      <div className="p-2"><h4>Basic Membership ($60/month)</h4>
        <ListGroup>
          <ListGroup.Item>Access to all courses</ListGroup.Item>  
          <ListGroup.Item>24/7 Chat</ListGroup.Item> 
          <ListGroup.Item>Attend 3 Group Sessions/Week</ListGroup.Item> 
          <ListGroup.Item><Button variant="primary">Enroll</Button></ListGroup.Item>           
        </ListGroup>      
      </div>

      <div className="p-2"><h4>Advanced Membership ($120/month)</h4>
      <ListGroup>
      <ListGroup.Item>Access to all courses</ListGroup.Item>  
          <ListGroup.Item>24/7 Chat</ListGroup.Item> 
          <ListGroup.Item>Attend 3 Group Sessions/Week</ListGroup.Item> 
          <ListGroup.Item>4 private lessons</ListGroup.Item>
          <ListGroup.Item><Button variant="primary">Enroll</Button></ListGroup.Item>           
        </ListGroup> 
      </div>   

      <div className="p-2"><h4>Premium Membership ($180/month)</h4>
      <ListGroup>
      <ListGroup.Item>Access to all courses</ListGroup.Item>  
          <ListGroup.Item>24/7 Chat</ListGroup.Item> 
          <ListGroup.Item>Attend 3 Group Sessions/Week</ListGroup.Item> 
          <ListGroup.Item>8 private lessons</ListGroup.Item>
          <ListGroup.Item>Eligibility Check for Ijazah</ListGroup.Item>   
          <ListGroup.Item><Button variant="primary">Enroll</Button></ListGroup.Item>           
        </ListGroup> 
      </div>  
    </Stack>



       
    </>
  )
}
