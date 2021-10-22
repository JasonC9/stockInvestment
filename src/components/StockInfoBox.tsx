import React from 'react';
import { Card } from 'react-bootstrap';
import {NavBtnLink} from '../components/NavbarElements';


export default function StockInfoBox(props: any) {

    return (
        <div>
            <Card>
                <Card.Body>
                    <h1> {props.stock.stockName} </h1>
                    <br />
                    <p> Minimum investment: ${props.stock.price} </p>
                </Card.Body>
            </Card>

        </div>
    )
}