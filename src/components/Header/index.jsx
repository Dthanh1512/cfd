import React from "react";
import "./style.scss";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { MENU } from "../../assets/constant";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="top__navbar">
          <div className="top__navbar-chat text">
            <p className="contact-des green-fs">Chat with us</p>
            <p className="contact-des">+420 336 775 664</p>
            <p className="contact-des">info@freshnesecom.com</p>
          </div>
          <ul class="top__navbar-contact text">
            <li class="contact-item">
              <a class="contact-link" href="./shipping-and-returns.html">
                Blog
              </a>
            </li>
            <li class="contact-item">
              <a class="contact-link" href="./faq.html">
                About Us
              </a>
            </li>
            <li class="contact-item">
              <a class="contact-link" href="./contact-us.html">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <Navbar />
      </div>
      <Menu list={MENU} />
    </div>
  );
}
