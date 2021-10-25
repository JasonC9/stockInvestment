import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
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
    }

    return (
        <Form className="cardCredit">
             <h2 className="form_register">Register Account</h2>
            <Row className="mb-3">
                <Form.Group as={Col}>
                <label htmlFor="creditcard">Credit card number</label>
                <input className="form_input" type="number" name="creditCardNumber" placeholder="Enter credit card number" required value={input.creditCardNumber} 
                onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col}>
                <label htmlFor="cvc">CVC</label>
                <input className="form_input" type="password" name="cvc" placeholder="Enter CVC number" required value={input.cvc}
                onChange={handleChange} />
                </Form.Group>
             </Row>

             <Row className="mb-3">
                <Form.Group as={Col}>
                <label htmlFor="creditcard">Expire Month</label>
                <input className="form_input" type="number" name="expireMonth" placeholder="Enter expire month" required value={input.expireMonth} 
                onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col}>
                <label htmlFor="year">Expire Year</label>
                <input className="form_input" type="number" name="expireYear" placeholder="Enter expire year" required value={input.expireYear}
                onChange={handleChange} />
                </Form.Group>
            </Row>
           
            <Form.Group className="mb-3">
                <label htmlFor="street">Street Address</label>
                <input className="form_input" type="text" name="streetAddress" placeholder="Enter street address" required value={input.streetAddress}
                onChange={handleChange} />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col}>
                <label htmlFor="city">City</label>
                <input className="form_input" type="text" name="city" placeholder="Enter City" required value={input.city}
                onChange={handleChange}/>
                </Form.Group>

                <Form.Group as={Col}>
                <label htmlFor="state">State</label>
                <input className="form_input" type="text" name="state" placeholder="Enter state" required value={input.state}
                onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col}>
                <label htmlFor="zipcode">ZipCode</label>
                <input className="form_input" type="number" name="zipcode" placeholder="Enter zipcode" required value={input.zipcode} 
                onChange={handleChange}/>
                </Form.Group>
            </Row>

            <button className="btn_color" type="submit" onClick={register}>Register</button><br />
            
            <p id="regiBtn">
                <a className="form_link" href="/register" id="linkLogin">Back</a>
            </p>
    </Form>
        )
}

export default RegisterCreditCard;