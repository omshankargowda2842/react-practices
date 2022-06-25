import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar bg-dark  navbar-expand-lg ">
      <img
        src="data:image/png;base64,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"
        height="50px"
        width="50px"
        alt=""
      />
      <Link to="/home" className="navbar-brand">
        React website
      </Link>

      <div className="ml-auto">
        <ul className="navbar-nav">
          <form className="form-inline my-2 my-lg-0 ml-10">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button 
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
