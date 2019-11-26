import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/shop"
          className={window.location.pathname === "/shop" ? "nav-link active" : "nav-link"}
        >
          Shop
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/search"
          className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/shoppingcart"
          className={window.location.pathname === "/shoppingcart" ? "nav-link active" : "nav-link"}
        >
          Shopping Cart
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;