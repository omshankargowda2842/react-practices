import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
  render() {
    return <nav className=' navbar navbar-expand-lg bg-dark '>
<Link className="navbar-brand" to="/home" > Axios</Link>
<div className='ml-auto'>
  <ul className="navbar-nav">
    <li className='nav-item'>
      <Link  className="nav-link" to="/contactapp">Contact App</Link>
      </li>
    <li className='nav-item'>
      <Link className="nav-link" to="/Filter">Filter</Link>
      </li>
    <li className='nav-item'>
      <Link  className="nav-link" to="/Message">Message</Link>
      </li>
    <li className='nav-item'>
      <Link  className="nav-link" to="/products">Products</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/Itterate">Itterate</Link>
      </li>
  </ul>
</div>
    </nav>
      

  }
}

export default Navbar
