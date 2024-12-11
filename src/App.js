import React from 'react';
import Holberton from './ALX-LOGO.jpg'
import './App.css'
import { getFooterCopy, getCurrentYear } from './utils';

function App() {
  return (
    <>
      <header className='App-header'>
        <img src={Holberton} alt="The holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">
            Email:
        </label>
        <input type="email" name="" id="" />
        <label htmlFor="Password">
          Password:
        </label>
        <input type="email" name="" id="" />
        <button className="btn-elment">OK</button>
      </div>
      <footer className='App-footer'>
        <p>Copyright {getCurrentYear()} - {getFooterCopy(false)}</p>
      </footer>
    </>
  );
}

export default App;
