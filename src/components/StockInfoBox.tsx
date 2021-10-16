import React from 'react';
import { Card } from 'react-bootstrap';


export default function StockInfoBox(props: any) {

    return (
        <div>
            <Card>
                <Card.Body>
                    <h1> {props.stock.name} </h1>
                    <br />
                    <p> Price per stock: ${props.stock.price} </p>
                </Card.Body>
            </Card>

        </div>
    )
}