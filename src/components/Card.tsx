import React from 'react';
import styled from 'styled-components';
import {Card,ListGroupItem,ListGroup,Button} from 'react-bootstrap';
// class Card
// {
//     companyPic: string;
//     companyName: string;
//     ceoName: string;
//     description: string;
//     price: number;
//     totalInvested: number;
//     marketCap: number; 
//     constructor(companyPic:string,companyName:string,ceoName:string,description:string,price:number,totalInvested:number,marketCap:number)
//     {
//         this.companyPic=companyPic
//         this.companyName=companyName
//         this.ceoName=ceoName
//         this.description=description
//         this.price=price
//         this.totalInvested=totalInvested
//         this.marketCap=marketCap
//     }
    
// }
function CardC()
{
    return(
            <Card style={{ width: '18rem'}}bg={'Secondary'}>
        <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Description Here
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Total Invested:</ListGroupItem>
            <ListGroupItem>Market Cap:</ListGroupItem>
            <ListGroupItem>Price</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="/mjinvestments/stocktest">To Stock Page</Card.Link>
        </Card.Body>
        </Card> 
    )
}
export default CardC;