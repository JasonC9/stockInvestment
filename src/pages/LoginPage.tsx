import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Grid } from "@material-ui/core";
import Login from '../components/Login';

export default function LoginPage() {

    return (
        <div style={{ backgroundColor: "#ADD8E6" }}>
            <Grid container direction="column" alignItems="center" justify="center">
                <Login />
            </Grid>
        </div>

    )
}