import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import {Card,ListGroupItem,ListGroup,Button} from 'react-bootstrap';
import "./Card.css";
import {Cards, Contain,Image} from './CardElements';
import {NavBtn,NavBtnLink} from './NavbarElements';

function PortfolioC(props:any)
{
    return(
        <div>
            <Cards>
                <Contain>
                    <Image src={props.stock.img} alt='image2'/>
                    <p>
                        Description:{props.stock.description} 
                    </p>
                    <p>
                    Total Invested:
                    </p>
                    <p>
                        Market Cap:
                    </p>
                </Contain>
                <Contain>
                    <p>Owned: </p>
                    <p>
                    Value:
                    </p>
                </Contain>
            </Cards>
        </div>
    )
}
export default PortfolioC;