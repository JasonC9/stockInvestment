import React from 'react';
import Navbar from '../components/navbar';
import StockInfoBox from '../components/StockInfoBox';

export default function StockPage() {

    const testStock = {
        name: "Company Name",
        description: "This is a fun company please give us money!"
    }

    return (
        <div>
            <Navbar />
            <StockInfoBox stock={testStock} />

        </div>
    )
}