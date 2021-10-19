import React, { useState } from "react";
import { useHistory } from "react-router";
import { isConstructorDeclaration } from "typescript";
import RegisterCreditCardService from "../services/RegisterCreditCardService";
import './Login.css';

    

function RegisterCreditCard() {

    const history = useHistory();

    const creditCardFormData = {
        creditCardNumber: "",
        cvc: "",
        expireMonth: "",
        expireYear: "",
        streetAddress: "",
        city: "",
        state: "",
        zipcode: "",
    }

    const [input, setInput] = useState(creditCardFormData);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };


    const register = (e: any) => {
        if(!input.creditCardNumber || !input.cvc || !input.expireMonth || !input.expireYear || !input.streetAddress || !input.city || !input.state || !input.zipcode)
        {
            return
        }

        e.preventDefault();
        let customer = {creditCardNumber: input.creditCardNumber, cvc: input.cvc, expireMonth: input.expireMonth, expireYear: input.expireYear, streetAddress: input.streetAddress, city: input.city, state: input.state, zipcode: input.zipcode};
        console.log('customer' + JSON.stringify(customer));

        let response = fetch("/creditcard", {method:"POST", headers:{"Content-Type":"application/json"}, credentials:"include", body: JSON.stringify(customer)})
        .then(() => {
            history.push('/login');
        });
        
        // RegisterCreditCardService.create(customer).then(() => {
        //     history.push('/login');
        // })
        
        
    }

    
    return (
        <div>
        <form className="card">
            <h2 className="form_register">Register Account</h2>
            <div className="form_input-group">
            <label htmlFor="creditcard">Credit card number</label>
            <input className="form_input" type="number" name="creditCardNumber" placeholder="Enter your credit card number" required value={input.creditCardNumber} 
            onChange={handleChange} />
            </div>

            <div className="form_input-group">
            <label htmlFor="cvc">CVC</label>
            <input className="form_input" type="password" name="cvc" placeholder="Enter CVC Number" required value={input.cvc}
            onChange={handleChange} />
            </div>

            <div className="form_input-group">
            <label htmlFor="month">Expire Month</label>
            <input className="form_input" type="number" name="expireMonth" placeholder="Enter Expire Month" required value={input.expireMonth} 
            onChange={handleChange}/>
            </div>

            <div className="form_input-group">
            <label htmlFor="year">Expire Year</label>
            <input className="form_input" type="number" name="expireYear" placeholder="Enter Expire Year" required value={input.expireYear}
            onChange={handleChange} />
            </div>

            <div className="form_input-group">
            <label htmlFor="street">Street Address</label>
            <input className="form_input" type="text" name="streetAddress" placeholder="Enter Street Address" required value={input.streetAddress}
            onChange={handleChange} />
            </div>

            <div className="form_input-group">
            <label htmlFor="city">City</label>
            <input className="form_input" type="text" name="city" placeholder="Enter City" required value={input.city}
            onChange={handleChange}/>
            </div>
           
            <div className="form_input-group">
            <label htmlFor="state">State</label>
            <input className="form_input" type="text" name="state" placeholder="Enter state" required value={input.state}
            onChange={handleChange} />
            </div>

            <div className="form_input-group">
            <label htmlFor="zipcode">ZipCode</label>
            <input className="form_input" type="number" name="zipcode" placeholder="Enter zipcode" required value={input.zipcode} 
            onChange={handleChange}/>
            </div>
           
            <button className="btn" type="submit" onClick={register}>Register</button><br />
            
            <p id="regiBtn">
                <a className="form_link" href="/register" id="linkLogin">Back</a>
            </p>
           
        </form>
    </div>
    )
}

export default RegisterCreditCard;