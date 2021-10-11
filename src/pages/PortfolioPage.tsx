import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/navbar';

export default function PortfolioPage(){

    return (
        <div>
            <Navbar/>
            <p>
                This is the portfolio page.
            </p>
            <Link to="/"> to login page </Link>
            <Card />
        </div>
    )
}