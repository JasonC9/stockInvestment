import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/navbar';
import { isAuthenticated } from '../utilities/authenticationUtils';
import { Grid } from "@material-ui/core";
import { InfoCard } from '../components/CardElements';
import AdminNavbar from './AdminNavbar';



function AddStock() {

    const history = useHistory();

    const stock = {
        img: "",
        stockName: "",
        description: "",
        totalInvested: "",
        marketCap: "",
        price: ""
         
    }

    const[input, setInput] = useState(stock);

    const handleChange = (e: any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const add = (e: any) => {
        e.preventDefault();
        let addStock = {img: input.img, stockName: input.stockName,  description: input.description, totalInvested: input.totalInvested, marketCap: input.marketCap, price: input.price};
        console.log('addStock' + JSON.stringify(addStock));

        let response = fetch("/stock", {method:"POST", headers:{"Content-Type":"application/json"}, credentials:"include", body: JSON.stringify(addStock)})
        .then(() => {
            history.push('/admin');
        });  

    }

    const cancel = (e: any) => {
        e.preventDefault();
        history.push('/admin');
    }

    return (
        <div>
           

                <AdminNavbar />
               
               
            
            <Grid container direction="column" alignItems="center" justify="center">
            <form className="card">
                <h2 className="form_register">Add Stock</h2>
                <div className="form_input-group">
                    <label>Select image:</label>
                    <input type="text" id="img" name="img" required value={input.img}
                    onChange={handleChange} />
                </div>

                <div className="form_input-group">
                    <label htmlFor="stock_name">Stock Name</label>
                    <input className="form_input" type="text" name="stockName" placeholder="Enter stock name" required value={input.stockName} 
                    onChange={handleChange}/>
                </div>

                <div className="form_input-group">
                    <label htmlFor="description">Description</label>
                    <input className="form_input" type="textbox" name="description" placeholder="Enter description" required value={input.description} 
                    onChange={handleChange}/>
                </div>

                <div className="form_input-group">
                    <label htmlFor="total">Total Invested</label>
                    <input className="form_input" type="text" name="totalInvested" placeholder="Enter total invested" required value={input.totalInvested} 
                    onChange={handleChange}/>
                </div>

                <div className="form_input-group">
                    <label htmlFor="market_cap">Market Cap</label>
                    <input className="form_input" type="text" name="marketCap" placeholder="Enter Market Cap" required value={input.marketCap}
                    onChange={handleChange} />
                </div>

                <div className="form_input-group">
                    <label htmlFor="total">Price</label>
                    <input className="form_input" type="text" name="price" placeholder="Enter Price" required value={input.price}
                    onChange={handleChange}/>
                </div>

                <button className="btn_color" type="submit" onClick={add} >Add</button><br />
                <button className="cancel_color" type="submit" onClick={cancel} >Cancel</button><br />
                
            </form>
            </Grid>
        </div>
    )

}

export default AddStock;