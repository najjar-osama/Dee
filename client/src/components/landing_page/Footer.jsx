import React from "react";

const Footer = () => (
  <footer className="footer container">
    <div className="footer-body">
      <span>{`© Dee! ${new Date(Date.now()).getFullYear()}.`}</span>
    </div>
  </footer>
);

export default Footer;
