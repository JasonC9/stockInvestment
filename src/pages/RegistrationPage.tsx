import React from 'react';
import { Link } from 'react-router-dom';
import RegisterUser from '../components/RegisterUser';
import RegisterCreditCard from '../components/RegisterCreditCard';

export default function RegistrationPage(){

    return (
        <div>
            <p>
                This is the registration page.
            </p>
            <Link to="mjinvestments/home">to home page</Link>
            <RegisterUser />
            <p>
                Break between registering users and registering a credit card. <br />
            </p>
            <RegisterCreditCard />
        </div>
    )
}