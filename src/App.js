import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ABW Bordados</h1>
        <p1>Puedes conectarte a la siguiente pagina para ver nuestros bordados</p1>		
        <a
          className="App-link"
          href="https://www.facebook.com/ABW-Bordados-969677983185285"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactate con nosotros
        </a>
      </header>
    </div>
  );
}

export default App;
