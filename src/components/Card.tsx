import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import {Card,ListGroupItem,ListGroup,Button} from 'react-bootstrap';
import "./Card.css";
import {Cards, Contain,Image} from './CardElements';
import {NavBtn,NavBtnLink} from './NavbarElements';
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



function CardC(props:any)
{
    return(
        <div>
        <Cards>
        <Contain>
            <Image src={props.stock.img} alt='image1'/>
            <p>
                Description:{props.stock.description}
            </p>
        </Contain>
        <Contain>
            <p>
                Total Invested: {props.stock.totalInvested}
            </p>
            <p>
                Market Cap: {props.stock.marketCap}
            </p>
        </Contain>
                <NavBtnLink to='/profile'>Price: {props.stock.price}</NavBtnLink>
    </Cards>
        </div>
    )
}
export default CardC;