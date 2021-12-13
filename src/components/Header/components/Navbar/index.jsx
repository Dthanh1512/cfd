import React from "react";
import Categories from "./components/Categories";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-img" src="/img/brand.png" alt="..." />
      <Categories />
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src="/img/ic-actions-user.svg" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src="/img/ic-ecommerce-basket.svg" />
          </a>
        </li>
      </ul>
    </div>
  );
}
