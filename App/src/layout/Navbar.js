import React  from 'react';
import {Link, NavLink } from 'react-router-dom';


const Navbar = () =>{
 return (
  <>
  <nav className="navbar navbar-expand-sm navbar-dark bg-info">
    <Link className="navbar-brand" to="/">ReactCrud</Link >

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <NavLink className="nav-link"  exact to="/">Home</NavLink>
        </li>
        <li className="nav-item" >
          <NavLink className="nav-link" exact to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">AddUser</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  </>
 );
};

export default Navbar;