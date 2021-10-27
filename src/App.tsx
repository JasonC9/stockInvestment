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
import AdminPage from './pages/AdminPage';
import AddFormPage from './pages/AddFormPage';
import AddStockPage from './pages/AddStockPage';
import ProfilePage from './pages/ProfilePage';
import CustomerListPage from './pages/CustomerListPage';
import AdminStockPage from './pages/AdminStockPage';

export interface IState {
  users: {
    name: string
    username: string
    password: string
  }[]
}


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
          <Route exact path="/admin">
            <AdminPage />
          </Route>
          <Route exact path="/admin/stock/:id">
            <AdminStockPage />
          </Route>
          <Route exact path="/admin/viewAll">
            <CustomerListPage />
          </Route>
          <Route exact path="/mjinvestments/home">
            <HomePage />
          </Route>
          <Route exact path="/mjinvestments/portfolio">
            <PortfolioPage />
          </Route>
          <Route exact path="/mjinvestments/profile">
            <ProfilePage />
          </Route>
          <Route exact path="/register">
            <RegistrationPage />
          </Route>
          <Route exact path="/stock/add">
            <AddStockPage />
          </Route>
          <Route exact path="/creditCard">
            <CreditcardPage />
          </Route>
          <Route path="/mjinvestments/stock/:id">
            <StockPage />
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
