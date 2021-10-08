import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/test/hello')
    .then(response => response.text())
    .then(message => setMessage(message));
  });

  return (
    <div className="App">
      

      <p>
        {message}
      </p>
    </div>
  );
}

export default App;
