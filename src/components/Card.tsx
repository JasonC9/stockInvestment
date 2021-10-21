import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import {Card,ListGroupItem,ListGroup,Button} from 'react-bootstrap';
import "./Card.css";
import { Cards, Contain, Image } from './CardElements';
import { NavBtn, NavBtnLink } from './NavbarElements';
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



function CardC(props: any) {
    const testStock = {
        stockName: "Company Name",
        description: "This is a fun company please give us money! The company was founded by me when I was just 12 years old.",
        price: 2,
        img: "This is the image",
        marketCap: 2102390,
        totalInvested: 1230012
    }
    let cards = [];


    // const [stock, setStock] = useState(testStock)


    // useEffect(() => {
    //     let url = `/stock/findById/${props.stock_id}`;
    //     fetch(url,
    //         {
    //             method: "GET",
    //             credentials: "include",
    //         }).then(response => response.json())
    //         .then(req_stock => setStock(req_stock)).then(last => console.log(stock)
    //             );
    //         },[]);



    return (
        <div>
            <Cards>
                <Contain>
                    <Image src={props.stock.img} alt='image1' />
                    {/* <p>
                Description:{props.stock.description}
            </p> */}
                </Contain>
                <Contain>
                    <p>
                        Total Invested: ${props.stock.totalInvested}
                    </p>
                    <p>
                        Market Cap: ${props.stock.marketCap}
                    </p>
                </Contain>
                <NavBtnLink to={`/mjinvestments/stock/${props.stock.stockId}`}>Click to learn more!</NavBtnLink>
            </Cards>
        </div>
        //     <Card style={{ width: '18rem'}}bg={'Secondary'}>
        // <Card.Img variant="top" src={stock.img} style={{width:`200px`}}/>
        // <Card.Body>
        //     <Card.Title>{stock.stockName}</Card.Title>
        //     <Card.Text>
        //     Description:{stock.description}
        //     </Card.Text>
        // </Card.Body>
        // <ListGroup className="list-group-flush">
        //     <ListGroupItem>Total Invested:{stock.totalInvested}</ListGroupItem>
        //     <ListGroupItem>Market Cap:{stock.marketCap}</ListGroupItem>
        //     <ListGroupItem>Price: {stock.price}</ListGroupItem>
        // </ListGroup>
        // <Card.Body>
        //     <Card.Link href="/mjinvestments/stocktest">To Stock Page</Card.Link>
        // </Card.Body>
        // </Card> 
    )
}
export default CardC;