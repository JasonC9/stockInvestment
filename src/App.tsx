import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import RegistrationPage from './pages/RegistrationPage';


function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch('/test/hello')
  //   .then(response => response.text())
  //   .then(message => setMessage(message));
  // });

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
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
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
