import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/navbar';
import StockInfoBox from '../components/StockInfoBox';
import { isAuthenticated } from '../utilities/authenticationUtils';

export default function StockPage() {

    const history = useHistory();

    useEffect(() => {
        (async () => {
            if (!await isAuthenticated()) {
                // console.log("checked auth")
                history.push("/login");
            }
        })();
    }, []);

    const testStock = {
        stockName: "Company Name",
        description: "This is a fun company please give us money! The company was founded by me when I was just 12 years old.",
        price: 2,
        img: "https://revature.com/wp-content/uploads/2017/06/logo-2.png",
        marketCap: 2102390,
        totalInvested: 1230012
    }

    let params: { id: string } = useParams();

    const [stock, setStock] = useState(testStock)


    useEffect(() => {
        let url = `/stock/findById/${params.id}`;
        fetch(url,
            {
                method: "GET",
                credentials: "include",
            }).then(response => response.json())
            .then(req_stock => setStock(req_stock));

    }, []);

    return (
        <div >
            <Navbar />
            <Container fluid >
                <Row>
                    <Col md={6}>
                        <h1> {stock.stockName} </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Image src={stock.img} rounded fluid />
                    </Col>
                    <Col md={4}>
                        <StockInfoBox stock={stock} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h1>Stock description:</h1>
                        <p>
                            {stock.description}
                        </p>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}