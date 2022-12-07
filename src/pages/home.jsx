import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import HomeSide from '../components/homeSide';
import LeftSide from '../components/leftSide';
import RightSide from '../components/rightSide';

const Home = () => {
  return (
    <Container fluid className=' box-border'>
      <Row className='h-[100vh] m-2'>
        <Col className='bg-blue-600' xs={3}><LeftSide/></Col>
        <Col className='bg-purple-700'xs={8}><HomeSide/></Col>
        <Col className='bg-green-500'xs={1}><RightSide/></Col>
      </Row>
      
    </Container>
  )
}

export default Home