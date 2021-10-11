import React from "react";

function RegisterCreditCard() {
    return (
        <form>
            <label htmlFor="creditcard">Credit card number</label>
            <input type="text" placeholder="Enter your credit card number" />

            <label htmlFor="cvc">CVC</label>
            <input type="password" placeholder="Enter CVC number" />

            <label htmlFor="month">Expire Month</label>
            <input type="number" placeholder="Enter expire month" />

            <label htmlFor="year">Expire Year</label>
            <input type="number" placeholder="Enter expire year" />

            <label htmlFor="street">Street Address</label>
            <input type="text" placeholder="Enter street address" />

            <label htmlFor="city">City</label>
            <input type="text" placeholder="Enter city" />

            <label htmlFor="state">State</label>
            <input type="text" placeholder="Enter state" />

            <label htmlFor="zipcode">ZipCode</label>
            <input type="number" placeholder="Enter zipcode" />
          
            <button type="submit">Register</button><br />

            <p id="form_text">
                <a className="form_link" href="Login.tsx" id="linkLogin">Already have Account</a>
            </p>
        </form>


    )
}

export default RegisterCreditCard;