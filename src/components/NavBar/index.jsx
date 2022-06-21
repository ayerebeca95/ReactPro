import React from "react";
//import Input from "../Input";
import "./styles.css";

const NavBar = () => {
  return (
    <ul style= {{width: "100%"}}>
      <li>
        <a href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
    </ul>
  );
};

export default NavBar;
