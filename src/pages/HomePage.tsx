import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/navbar';
import { isAuthenticated } from '../utilities/authenticationUtils';

<<<<<<< HEAD

export default function HomePage(){
=======
export default function HomePage() {
>>>>>>> e1d12be76202b2e80b42ab4eb358340b506abb24

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
            <Navbar />
            <p>
                This is the home page.
            </p>
            <Link to="/mjinvestments/portfolio"> to portfolio page</Link>
            <br />
            <Link to="/mjinvestments/stocktest"> to stock test page</Link>
            <Card />
        </div>
    )
}