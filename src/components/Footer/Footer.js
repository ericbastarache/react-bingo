import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer>
      <p>
        {props.footer}
      </p>
    </footer>
  );
};

export default Footer;
