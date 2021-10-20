import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

export default function LoginPage(){

    return (
        <div>
           <Container>
               <Row>
                   <Col>
                         <Login />
                    </Col>
                </Row>
           </Container> 
        </div>
    )
}