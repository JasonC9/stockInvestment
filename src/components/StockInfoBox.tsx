import React from 'react';


export default function StockInfoBox(props: any) {

    return (
        <div>
            <h1>{props.stock.name}</h1>
            <p>{props.stock.description}</p>

        </div>
    )
}