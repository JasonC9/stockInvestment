import React from "react";
import './Login.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

function RegisterUser() {
    return (
        <div>
            <form className="card">
                <h2 className="form_register">Register User</h2>
                <div className="form_input-group">
                <label htmlFor="name">Name</label>
                <input className="form_input" placeholder="Full name" required/>
                </div>

                <div className="form_input-group">
                <label htmlFor="username">Username</label>
                <input className="form_input" type="username" placeholder="Enter username" required/>
                </div>

                <div className="form_input-group">
                <label htmlFor="password">Password</label>
                <input className="form_input" type="password" placeholder="Enter password" required/>
                </div>
                <Link to="/creditCard">
                <button className="btn" type="submit">Next</button><br />
                </Link>
                <p id="form_text">
                <a className="form_link" href="/login" id="linkCreateAccount">Already have account</a>
                </p>

              
            </form>
        </div>


    )
}

export default RegisterUser;