import React from 'react'
import { Alert } from 'react-bootstrap'

function Message({ children /* the error */ }) {
  return (
    
      <Alert variant="danger">
        {children}
      </Alert>
    )
  
}

export default Message