import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Navbar from '../components/navbar';
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

        </div>
    )
}