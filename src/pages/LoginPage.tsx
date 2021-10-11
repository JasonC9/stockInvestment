import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

export default function LoginPage(){

    return (
        <div>
            <p>
                This is the login page.
            </p>
            <Link to="/register"> to registration</Link>
            <Login />
            
        </div>
    )
}