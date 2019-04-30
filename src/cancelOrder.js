import React from 'react'
import { Button, Alert } from  'react-bootstrap';

const cancelOrder = (props) => {
   const cancelOrder = () => {
       console.log("i was summoned")
   }     
    
  return (
    <div className="container"> 
      <Button type="submit" variant="warning" onclick={cancelOrder}>Cancel</Button>
    </div>
  )
}

export default cancelOrder;