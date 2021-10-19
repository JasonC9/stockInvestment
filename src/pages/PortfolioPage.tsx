import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Navb from '../components/navbar';
import Profile from '../components/Profile';

export default function PortfolioPage(){

    return (
        <div>
            <Navb/>
            <p>
                This is the portfolio page.
            </p>
            <Link to="/login"> to login page </Link>
            <Profile />

        </div>
    )
}