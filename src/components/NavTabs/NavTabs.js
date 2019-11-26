import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
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