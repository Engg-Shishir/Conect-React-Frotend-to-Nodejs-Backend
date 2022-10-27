import React from 'react';
import './Header.css';
import logo from './logo.svg';

function Header() {
 return (
  <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="heading">Bismillahir Rahmanir Rahim</h2>
        <hr className="hr" width="500px" />
        <br/>
      </header>
  </div>
 )
}

export default Header
