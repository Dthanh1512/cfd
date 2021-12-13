import React from "react";
import { TAG } from "../../assets/constant";
import Tag from "./components/Tag";
import "./style.scss";

export default function Footer() {
  return (
    <footer>
      <div class="container">
        <div className="row">
          <div class="col-3 col-sm">
            <h6 class="footer-title">Get in touch</h6>
            <ul class="list-unstyled">
              <li>
                <a class="footer-text" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  Press Releases
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div class="col-3 col-sm">
            <h6 class="footer-title">Connections</h6>
            <ul class="list-unstyled">
              <li>
                <a class="footer-text" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  Youtube
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div class="col-3 col-sm">
            <h6 class="footer-title">Earnings</h6>
            <ul class="list-unstyled">
              <li>
                <a class="footer-text" href="#">
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  Advertise your product
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  Sell on Market
                </a>
              </li>
            </ul>
          </div>
          <div class="col-3 col-sm">
            <h6 class="footer-title">Account</h6>
            <ul class="list-unstyled">
              <li>
                <a class="footer-text" href="#">
                  Your account
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  Returns Centre
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  100 % purchase protection
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  Chat with us
                </a>
              </li>
              <li>
                <a class="footer-text" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Tag list={TAG} />
        <p className="footer__copy">Copyright © 2020 petrbilek.com</p>
      </div>
    </footer>
  );
}
