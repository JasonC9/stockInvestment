<<<<<<< HEAD
import React from 'react';
import Navb from '../components/navbar';
=======
import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Navbar from '../components/navbar';
>>>>>>> 986dd8e90843336ed3345c2d9f52be6f434e5f57
import StockInfoBox from '../components/StockInfoBox';

export default function StockPage(props: any) {

    const testStock = {
        stockName: "Company Name",
        description: "This is a fun company please give us money! The company was founded by me when I was just 12 years old.",
        price: 2,
        img: "This is the image",
        marketCap: 2102390,
        totalInvested: 1230012
    }

    const [stock, setStock] = useState(testStock)


    useEffect(() => {
        let url = `/stock/findById/${props.stock_id}`;
        fetch(url,
            {
                method: "GET",
                credentials: "include",
            }).then(response => response.json())
            .then(req_stock => setStock(req_stock)).then(last => console.log(stock));

    }, []);

    return (
        <div>
<<<<<<< HEAD
            <Navb/>
            <p> {testStock.imgsrc} </p>
            <br />
            <StockInfoBox stock={testStock} />
            <p> {testStock.description} </p>
=======
            <Navbar />
            <Container>
                <Row>
                    <Col md={6}>
                        <p> {stock.stockName} </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Image src={stock.img} />
                    </Col>
                    <Col md={4}>
                        <StockInfoBox stock={stock} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <p>
                            {stock.description}
                        </p>
                    </Col>
                </Row>
            </Container>
>>>>>>> 986dd8e90843336ed3345c2d9f52be6f434e5f57

        </div>
    )
}