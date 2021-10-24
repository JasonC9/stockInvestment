import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/navbar';
import { isAuthenticated } from '../utilities/authenticationUtils';
import { Grid } from "@material-ui/core";
import { InfoCard } from '../components/CardElements';
import { Container } from 'react-bootstrap';



export default function HomePage(props: any) {



    function renderTable(cards: any) {
        return (
            Object.entries(cards).forEach((fieldStock) =>
                <Card stock={fieldStock} />)
        )
    }

    const history = useHistory();


    const testStock = {
        stockId: 1,
        stockName: "Company Name",
        description: "This is a fun company please give us money! The company was founded by me when I was just 12 years old.",
        price: 2,
        img: "https://revature.com/wp-content/uploads/2017/06/logo-2.png",
        marketCap: 2102390,
        totalInvested: 1230012
    }
    let cards: any[] = [];



    useEffect(() => {
        (async () => {
            if (!await isAuthenticated()) {
                // console.log("checked auth")
                history.push("/login");
            }
        })();
    }, []);

    const [stocks, setStocks] = useState([testStock])


    useEffect(() => {
        let url = `/stock/findAll`;
        fetch(url,
            {
                method: "GET",
                credentials: "include",
            }).then(response => response.json())
            .then(cards => {
                setStocks(cards)
            });
    }, []);

    // let checkStock=useState(testStock);
    // const list=()=>{
    //     return cards.map((checkStock)=>{
    //         return(<div>Test{checkStock.stock_id}Test</div>)
    //     })
    // }

    console.log(stocks)
    return (
        <div>
            <div>


                <Navbar />
                <Container fluid style={{ paddingTop: "20px" }}>
                    <InfoCard>
                        <h2>What is MJ Investments?</h2>
                        <h5 style={{ paddingTop: "10px" }}>
                            We offer a solution to empower everyday people to become angel investors to front of the market innovators and
                            their start up companies. You can now easily (at the click of a button!) kickstart your portfolio and
                            begin forming the future of technology and commerce.
                        </h5>
                        <h5 style={{ paddingTop: "5px" }}>
                            Take a look below at the myriad of choices available to you to start investing in top of the line entrepreneurs.
                            Pick a couple of companies that pique your interest and click to educate yourself about the company. Finally,
                            you can decide how many shares you would like to purchase and suddenly you are a proud shareholder of a
                            Facebook to be!
                        </h5>
                    </InfoCard>
                </Container>

                <Grid container spacing={0}>

                    {/* <div className="stockI">
            {
            cards.map((arrStock)=>(
                <Card stock_id={arrStock.stock_id}/>
            ))}
            </div> */}

                    {
                        stocks.map((stock) => {
                            return (
                                <Grid key={stock.stockName} item xs={6} sm={6} md={4}>
                                    <Card stock={stock} />
                                </Grid>
                            )
                        })

                    }




                    {/* {
                renderTable(stocks);
            } */}
                </Grid>





                {/* <div>
                {
                    cards.map(({testStock})=>(
                        <Card stock_id={testStock}></Card>
                    ))
                }
                </div> */}
            </div>
        </div>
    )
}
