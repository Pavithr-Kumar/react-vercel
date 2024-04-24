import React from "react";
import "../css/header.css";

export const Header = () => {
  return (
    <header>
      <img
        src="https://www.zettamine.com/wp-content/uploads/2022/05/Zettamine-Logo-04.png"
        alt=""
      />
      <nav>
        <h3>Home</h3>
        <h3>Services</h3>
        <h3>About</h3>
        <h3>Contact Us</h3>
      </nav>
    </header>
  );
};
