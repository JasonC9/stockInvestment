import React from "react";
import './Login.css';

function RegisterCreditCard() {
    return (
        <div>
        <form className="card">
            <h2 className="form_register">Register Account</h2>
            <div className="form_input-group">
            <label htmlFor="creditcard">Credit card number</label>
            <input className="form_input" type="number" placeholder="Enter your credit card number" required />
            </div>

            <div className="form_input-group">
            <label htmlFor="cvc">CVC</label>
            <input className="form_input" type="password" placeholder="Enter CVC Number" required />
            </div>

            <div className="form_input-group">
            <label htmlFor="month">Expire Month</label>
            <input className="form_input" type="number" placeholder="Enter Expire Month" required />
            </div>

            <div className="form_input-group">
            <label htmlFor="year">Expire Year</label>
            <input className="form_input" type="number" placeholder="Enter Expire Year" required />
            </div>

            <div className="form_input-group">
            <label htmlFor="street">Street Address</label>
            <input className="form_input" type="text" placeholder="Enter Street Address" required />
            </div>

            <div className="form_input-group">
            <label htmlFor="city">City</label>
            <input className="form_input" type="text" placeholder="Enter City" required/>
            </div>
           
            <div className="form_input-group">
            <label htmlFor="state">State</label>
            <input className="form_input" type="text" placeholder="Enter state" required />
            </div>

            <div className="form_input-group">
            <label htmlFor="zipcode">ZipCode</label>
            <input className="form_input" type="number" placeholder="Enter zipcode" required />
            </div>
           
            <button className="btn" type="submit">Register</button><br />

            <p id="regiBtn">
                <a className="form_link" href="#" id="linkLogin">Back</a>
            </p>
        </form>
    </div>


    )
}

export default RegisterCreditCard;