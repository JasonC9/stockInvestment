import React from "react";

function AddForm() {

    return (
        <div>
            <form className="card">
                <h2 className="form_register">Add New</h2>
                <div className="form_input-group">
                    <label>Select image:</label>
                    <input type="text" id="img" name="img" />
                </div>

                <div className="form_input-group">
                    <label htmlFor="description">Description</label>
                    <input className="form_input" type="textbox" name="description" placeholder="Enter description" />
                </div>

                <div className="form_input-group">
                    <label htmlFor="total">Total Invested</label>
                    <input className="form_input" type="text" name="total" placeholder="Enter total invested" />
                </div>

                <div className="form_input-group">
                    <label htmlFor="market_cap">Market Cap</label>
                    <input className="form_input" type="text" name="market_cap" placeholder="Enter Market Cap" />
                </div>

                <div className="form_input-group">
                    <label htmlFor="total">Price</label>
                    <input className="form_input" type="text" name="price" placeholder="Enter Price" />
                </div>

                <button className="btn_color" type="submit" >Add</button><br />

            </form>
        </div>


    )

}

export default AddForm;