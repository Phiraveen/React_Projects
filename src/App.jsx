import React from 'react'
import Weather from './Weather'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  

  return (
    
    <Container>
    <Row>
     <Weather />
    </Row>
    </Container>
  )
}

export default App
