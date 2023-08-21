import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
//import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

export const Courses = () => {
  return (
    <>
    <p class='warning'> <h3> Sheikh - please provide some additional context for this page in few lines </h3></p>

    <Stack gap={3}>
      <div className="p-2"><h4>Learn How to Read</h4>
        <ListGroup>
          <ListGroup.Item>Course Overview </ListGroup.Item>
            <ListGroup>
              <ListGroup.Item>* Learning how to read is the first and the most important step because if you’re not good at reading then you will memorize wrong and you will be sinful because you were able to learn how to memorize and read good but you chose not to) </ListGroup.Item>
            </ListGroup> 
          <ListGroup.Item>Curriculum</ListGroup.Item>
        </ListGroup>      
      </div>
      <div className="p-2"><h4>Learn How to Memorize</h4>
      <ListGroup>
          <ListGroup.Item>Course Overview </ListGroup.Item>
            <ListGroup>
              <ListGroup.Item>* Learning how to memorize and actually memorizing is the second step towards having the Quran in your heart and memorizing is the time to apply your reading skills that you gained through the first course) </ListGroup.Item>
            </ListGroup> 
          <ListGroup.Item>Curriculum</ListGroup.Item>
        </ListGroup> 
      </div>
      <div className="p-2"><h4>Learn How to Beautify Your Voice</h4>
      <ListGroup>
          <ListGroup.Item>Course Overview </ListGroup.Item>
            <ListGroup>
              <ListGroup.Item>* After learning how to read and then memorizing a portion or the entire Quran then you should learn how to read beautifully because we are human beings and we like to hear beautiful voices or have a beautiful voice ourselves and that’s how the Quran was given to us by our Scholars and Sheikhs) </ListGroup.Item>
            </ListGroup> 
          <ListGroup.Item>Curriculum</ListGroup.Item>
        </ListGroup> 
      </div>  

    </Stack>

    
        
    </>
    
  )
}
