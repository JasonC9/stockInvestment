import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/navbar';
import { isAuthenticated } from '../utilities/authenticationUtils';

export default function HomePage(){

    const history = useHistory();

    useEffect( () => {
        (async () => {
            if (!await isAuthenticated()){
                // console.log("checked auth")
                history.push("/login");
            }
        })();
    }, []);


    return (
        <div>
            <Navbar />
            <p>
                This is the home page.
            </p>
            <Link to="/mjinvestments/portfolio"> to portfolio page</Link>
            <Card />
        </div>
    )
}