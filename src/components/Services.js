import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

export const Services = () => {
  return (
    <>  
    <br></br>
    <h4>Our Services</h4>
    <br></br>
    <Stack gap={3}>
      <div className="p-2"><h4>Chat support</h4>
        <ListGroup>
          <ListGroup.Item>24/7 Chat</ListGroup.Item>            
        </ListGroup>      
      </div>
      <div className="p-2"><h4>Group Sessions</h4>
      <ListGroup>
          <ListGroup.Item> Extra Private Sessions: $40 /hour </ListGroup.Item>            
        </ListGroup> 
      </div>   
    </Stack>
</>
  )
}
