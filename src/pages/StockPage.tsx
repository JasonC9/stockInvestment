import React from 'react';
import Navb from '../components/navbar';
import StockInfoBox from '../components/StockInfoBox';

export default function StockPage() {

    const testStock = {
        name: "Company Name",
        description: "This is a fun company please give us money! The company was founded by me when I was just 12 years old.",
        price: 200,
        imgsrc: "This is the image"
    }

    return (
        <div>
            <Navb/>
            <p> {testStock.imgsrc} </p>
            <br />
            <StockInfoBox stock={testStock} />
            <p> {testStock.description} </p>

        </div>
    )
}