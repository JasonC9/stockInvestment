import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function HomePage(){

    return (
        <div>
            <p>
                This is the home page.
            </p>
            <Link to="/mjinvestments/portfolio"> to portfolio page</Link>
            <Card />
        </div>
    )
}