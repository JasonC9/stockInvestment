import React, { useEffect, useState } from 'react';
import { Grid } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Navb from '../components/navbar';
import Profile from '../components/Profile';
import { isAuthenticated } from '../utilities/authenticationUtils';

export default function PortfolioPage() {

    const testStock = {
        stockId: 1,
        stockName: "Company Name",
        description: "This is a fun company please give us money! The company was founded by me when I was just 12 years old.",
        price: 2,
        img: "https://revature.com/wp-content/uploads/2017/06/logo-2.png",
        marketCap: 2102390,
        totalInvested: 1230012
    }

    const history = useHistory();
    const [stocks, setStocks] = useState([testStock])

    useEffect(() => {
        (async () => {
            if (!await isAuthenticated()) {
                // console.log("checked auth")
                history.push("/login");
            }
        })();
    }, []);

    useEffect(() => {
        fetch("/holdings/getStocks", { method: "GET", credentials: 'include', })
            .then(response => response.json())
            .then(stocks => setStocks(stocks))
    }, []);

    // console.log(stocks);


    useEffect(() => {
        let url = `/stock/findAll`;
        fetch(url,
            {
                method: "GET",
                credentials: "include",
            }).then(response => response.json())
            .then(cards =>{setStocks(cards)
            });
            },[]);
    
    return (
        <div>
            <Navb />

            <h1> Welcome to your portfolio! </h1>

            <Grid container spacing={4}>

                {
                    stocks.map((stock) => {
                        return (
                            <Grid key={stock.stockName} item xs={6} sm={6} md={4}>
                                <Card stock={stock} />
                            </Grid>

                        )
                    })
                }

            </Grid>


        </div>
    )
}