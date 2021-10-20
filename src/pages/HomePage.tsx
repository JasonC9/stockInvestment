import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/navbar';
import { isAuthenticated } from '../utilities/authenticationUtils';
import { Grid } from "@material-ui/core";
import {InfoCard} from '../components/CardElements';

export default function HomePage(props:any) {


    const history = useHistory();


    const testStock = {
        stockName: "Company Name",
        description: "This is a fun company please give us money! The company was founded by me when I was just 12 years old.",
        price: 2,
        img: "This is the image",
        marketCap: 2102390,
        totalInvested: 1230012
    }
    let cards=[];

    useEffect(() => {
        (async () => {
            if (!await isAuthenticated()) {
                // console.log("checked auth")
                history.push("/login");
            }
        })();
    }, []);


    return (
        <div>
            <div style={{
                backgroundImage: `url("https://cdn.wallpapersafari.com/91/34/kTOp1P.jpg")`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `1920px 720px`
            }}>
            <Navbar />
            <p>
                This is the home page.
            </p>
            <Link to="/mjinvestments/portfolio"> to portfolio page</Link>
            <br />
            <Link to="/mjinvestments/stocktest"> to stock test page</Link>

            <InfoCard>What is MJ Investments?
                <p>We are a third party marketing website that offers services to buy and sell stocks for you and your company</p>
            </InfoCard>
            <br/>
            <Grid container spacing={4}>
            <Grid item xs={6} sm={6} md={4}>
            <Card stock_id={1} />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
            <Card stock_id={2} />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
            <Card stock_id={3} />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
            <Card stock_id={2} />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
            <Card stock_id={2} />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
            <Card stock_id={2} />
            </Grid>
            </Grid>
            </div>
        </div>
    )
}