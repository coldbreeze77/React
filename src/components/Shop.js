import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
//import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
//import Button from 'react-bootstrap/Button';


export const Shop = () => {
  return (
    <>
   <p class='warning'> <h3> Sheikh - please provide some additional context for this page in few lines </h3></p>
    <br/><br/>
    <Stack gap={3}>
      <div className="p-2"><h4>Quran</h4></div>
      <div className="p-2"><h4>Islamic books</h4></div>   
      <div className="p-2"><h4>Islamic clothing</h4>
      <ListGroup>      
        <ListGroup.Item><b>Men:</b> Thobes, Headwear, Accessories</ListGroup.Item> 
        <ListGroup.Item><b>Women:</b> Abaya’s, Prayer wear, Headwear, Accessories</ListGroup.Item> 
        <ListGroup.Item><b>Kids:</b> Abaya, Thobes, Headwear, Accessories</ListGroup.Item>                   
      </ListGroup> 
      </div>  
    </Stack>

    </>
  )
}
