import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import RegistrationPage from './pages/RegistrationPage';
import CreditcardPage from './pages/CreditcardPage';
import StockPage from './pages/StockPage';


function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch('/test/hello')
  //   .then(response => response.text())
  //   .then(message => setMessage(message));
  // });

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/mjinvestments/home">
            <HomePage />
          </Route>
          <Route exact path="/mjinvestments/portfolio">
            <PortfolioPage />
          </Route>
          <Route exact path="/register">
            <RegistrationPage />
          </Route>
          <Route exact path="/creditCard">
            <CreditcardPage />
          </Route>
          <Route exact path="/mjinvestments/stocktest">
            <StockPage stock_id={1} />
          </Route>
          <Route path="/">
            <Redirect to="/mjinvestments/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
