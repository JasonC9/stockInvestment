import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/navbar';
import { isAuthenticated } from '../utilities/authenticationUtils';
import { Grid } from "@material-ui/core";
import { InfoCard } from '../components/CardElements';
import AdminNavbar from '../components/AdminNavbar';

import '../App.css';


export default function AdminPage(props: any) {

    function renderTable(cards: any) {
        return (
            Object.entries(cards).forEach((fieldStock) =>
                <Card stock={fieldStock} />)
        )
    }

    const history = useHistory();


    const testStock = {
        stock_id: 1,
        stockName: "Company Name",
        description: "This is a fun company please give us money! The company was founded by me when I was just 12 years old.",
        price: 2,
        img: "This is the image",
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
            
            <div >

            <AdminNavbar /><br />

               {/*  <InfoCard>What is MJ Investments?
                    <p>We are a third party marketing website that offers services to buy and sell stocks for you and your company</p>
                </InfoCard> 
                <br /> */}
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