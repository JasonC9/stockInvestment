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

        fetch("/stock", {method:"POST", headers:{"Content-Type":"application/json"}, credentials:"include", body: JSON.stringify(addStock)})
        .then(() => {
             alert("Stock Added Successfully!")
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
                    <label>Select image</label>
                    <input className="form_input" type="text" id="img" name="img" value={input.img} placeholder="Enter image url"
                    onChange={handleChange}  required pattern="\S+"/>
                </div>

                <div className="form_input-group">
                    <label htmlFor="stock_name">Stock Name</label>
                    <input className="form_input" type="text" name="stockName" placeholder="Enter stock name" value={input.stockName} 
                    onChange={handleChange} required pattern="\S+"/>
                </div>

                <div className="form_input-group">
                    <label htmlFor="description">Description</label>
                    <input className="form_input" type="textbox" name="description" placeholder="Enter description"  value={input.description} 
                    onChange={handleChange} required pattern="\S+"/>
                </div>

                <div className="form_input-group">
                    <label htmlFor="total">Total Invested</label>
                    <input className="form_input" type="text" name="totalInvested" placeholder="Enter total invested"  value={input.totalInvested} 
                    onChange={handleChange} required pattern="\S+"/>
                </div>

                <div className="form_input-group">
                    <label htmlFor="market_cap">Market Cap</label>
                    <input className="form_input" type="text" name="marketCap" placeholder="Enter Market Cap"  value={input.marketCap}
                    onChange={handleChange} required pattern="\S+"/>
                </div>

                <div className="form_input-group">
                    <label htmlFor="total">Price</label>
                    <input className="form_input" type="text" name="price" placeholder="Enter Price"  value={input.price}
                    onChange={handleChange} required pattern="\S+"/>
                </div>

                <button className="btn_color" type="submit" onClick={add} >Add</button><br />
                <button className="cancel_color" type="submit" onClick={cancel} >Cancel</button><br />
                
            </form>
            </Grid>
        </div>
    )

}

export default AddStock;