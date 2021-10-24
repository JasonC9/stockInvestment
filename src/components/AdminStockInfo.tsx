import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavBtnLink } from '../components/NavbarElements';
import AdminCard from './AdminCard';


export default function AdminStockInfo(props: any) {

    const history = useHistory();

    const [amount, setAmount] = useState("0");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    }

    const handleSubmit = () => {
        const buyPacket: { stockId: string, amount: string } = {
            stockId: props.stock.stockId,
            amount: amount
        }

        // console.log(buyPacket);

        fetch("/holdings/buyStock", { method: "POST", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify(buyPacket) })
            .then(response => response.text())
            .then(result => {
                if (result == "success") {
                    alert("purchase successful!")
                    history.push("/mjinvestments/portfolio")
                }
            });
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h1> {props.stock.stockName} </h1>
                    <br />
                    <p> Market cap: ${props.stock.marketCap} </p>
                    <p> Total Invested: ${props.stock.totalInvested}</p>
                    <p> </p>
                    <p> Price per share: ${props.stock.price} </p>
                </Card.Body>
            </Card>

        </div>
    )
}