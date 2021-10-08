import React from 'react'
import styled from 'styled-components'
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
function Card()
{
    return(
        <Cards>
            <Contain>
                <Image src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" alt='image1'/>
                    Description:
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
            </Contain>
            <Contain>
                    Total Invested:
                    <br></br>
                    <br></br>
                    Market Cap:
            </Contain>
                    <NavBtnLink to='/profile'>Price: $200</NavBtnLink>
        </Cards>
    )
}
export default Card;