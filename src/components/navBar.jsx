import React from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../services/authService";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fa fa-home aria-hidden=true"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <NavLink className="nav-item nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-item nav-link" to="/rentals">
              Rentals
            </NavLink>
            {!user && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/register">
                  Register
                </NavLink>
                <NavLink className="nav-item nav-link" to="/login">
                  Login
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/profile">
                  <div>
                    <b>
                      <i className={auth.getUserIcon()}></i>
                      <span> {auth.getCurrentUser().name}</span>
                    </b>
                  </div>
                </NavLink>
                <NavLink className="nav-item nav-link" to="/logout">
                  Logout
                </NavLink>
              </React.Fragment>
            )}
          </div>
          <NavLink
            style={{ color: "rgb(100,100,100)" }}
            className="nav-item nav-link"
            to="/about"
          >
            <i>About Website</i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
