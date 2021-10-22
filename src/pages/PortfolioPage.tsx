import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Navb from '../components/navbar';
import Profile from '../components/Profile';
import { Grid } from "@material-ui/core";
import PortfolioCard from '../components/PortfolioCard'

        
export default function PortfolioPage(){
    function renderTable(cards:any)
    {
        return(
            Object.entries(cards).forEach((fieldStock) => 
            <Card stock={fieldStock}/>)
        )
    }

    const testStock = {
        stock_id: 1,
        stockName: "Company Name",
        description: "This is a fun company please give us money! The company was founded by me when I was just 12 years old.",
        price: 2,
        img: "This is the image",
        marketCap: 2102390,
        totalInvested: 1230012
    }
    const [stocks, setStocks] = useState([])


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
            <Navb/>
            <p>
                This is the portfolio page.
            </p>
            <Link to="/login"> to login page </Link>
            <Profile />
            <br/>
            <Grid container spacing={4}>
            {
                stocks.map((stock)=>{return(
                    <Grid item xs={6} sm={6} md={4}>
                    <PortfolioCard stock={stock}/>
                    </Grid>
                    )})

            }
            </Grid>
        

        </div>
    )
}