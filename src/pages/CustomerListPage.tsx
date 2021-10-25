import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import AdminNavbar from "../components/AdminNavbar";
import { isAuthenticated } from "../utilities/authenticationUtils";
import { userInfo } from "os";

function CustomerListPage(pros: any){

    const history = useHistory();

    
    const userData = {
        id: 1,
        first_name: "",
        username: ""
    }
    const creditcardData = {
        id: 1,
        creditCardNumber: 2,
        cvc: 3,
        expireMonth: 4,
        expireYear: 5,
        streetAddress: "",
        city: "",
        state: "",
        zipcode: 6,
        user_id: 7,
        user: userData
    }


    const [users, setUsers] = useState([{creditcardData,userData}])

    useEffect(() => {
        (async () => {
            if (!await isAuthenticated()) {
                // console.log("checked auth")
                history.push("/login");
            }
        })();
    }, []);

    const [customers, setCustomers] = useState([creditcardData]);


    useEffect(() => {
        let url = `/creditcard/findAll`;
        fetch(url,
            {
                method: "GET",
                credentials: "include",
            }).then(response => response.json())
            .then(cus => {
                setCustomers(cus);
                console.log(cus);
            });
    }, []);

   
    return (
        
        <div>
            <AdminNavbar />
            <h2 className="text-center">Customer List</h2>
            <Grid container direction="column" alignItems="center" justify="center">
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead style={{ backgroundColor: "#ADD8E6" }}>
                        <tr>
                            <th>Username</th>
                            <th>Credit Card Number</th>
                            <th>CVC</th>
                            <th>Expire Month</th>
                            <th>Expire Year</th>
                            <th>Street Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                           
                            customers.map((customer) => {
                                return (
                                    <tr key = {customer.id}>
                                        <td>{customer.user.username}</td>
                                        <td>{customer.creditCardNumber}</td>
                                        <td>{customer.cvc}</td>
                                        <td>{customer.expireMonth}</td>
                                        <td>{customer.expireYear}</td>
                                        <td>{customer.streetAddress}</td>
                                        <td>{customer.city}</td>
                                        <td>{customer.state}</td>
                                        <td>{customer.zipcode}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </Grid>
        </div>
        
    )

}

export default CustomerListPage;