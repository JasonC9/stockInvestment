import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import {Card,ListGroupItem,ListGroup,Button} from 'react-bootstrap';
import "./Card.css";
import { Cards, Contain, Image } from './CardElements';
import { NavBtn, NavBtnLink } from './NavbarElements';

function PortfolioC(props: any) {
    return (
        <div>
            <Cards>
                <Contain>
                    <Image src={props.stock.img} alt='image2' />
                    <p>
                        Market Cap: ${props.stock.marketCap}
                    </p>
                    <p>
                        Total Invested: ${props.stock.totalInvested}
                    </p>
                </Contain>
                <Contain>
                    <p> My investment:  ${props.amount_held}</p>
                </Contain>
            </Cards>
        </div>
    )
}
export default PortfolioC;