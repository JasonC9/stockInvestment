import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/navbar';
import { isAuthenticated } from '../utilities/authenticationUtils';
import {Grid} from "@material-ui/core";


export default function HomePage(){

    const history = useHistory();

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
            <div style={{backgroundImage: `url("https://cdn.wallpapersafari.com/91/34/kTOp1P.jpg")`,
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



            <Grid container spacing={4}>
            <Grid item xs={6} sm={6} md={4}>
            <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card />
            </Grid>
            </Grid>


            </div>
        </div>
    )
}