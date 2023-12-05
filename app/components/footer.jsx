"use client";
import React from "react";
import "./footer.css";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import Btn from "./btn";

const Footer = () => {
  return (
    <div className="footer-container-outerdelouter">
      <div className="footer-coontainer-outer" id="visit">
        <div className="footer-container">
          <div className="footer-social">
            <h2>Social Media</h2>
            <div className="footer-social-div">
              <CiFacebook size={60} />
              <CiInstagram size={60} />
            </div>
          </div>
          <div className="footer-terms">
            <h2>Terms and Conditions</h2>
            <Btn info="terms" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
