import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const handleActiveLink = (ele) => {
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    ele.className = "active";
    console.log(navLinks);
    console.log(ele);
  };

  return (
    <nav id="nav">
      <div className="logo-and-name">
        <div className="logo">
          <img src="./transparent-logo.png" alt="" />
        </div>
        <a href="/">WEBBSP.IN</a>
      </div>
      <div className="nav-links">
        <a className="active"
          onClick={(e) => {
            handleActiveLink(e.target);
          }}
          href={"#page1"}>
          HOME
        </a>
        <a
          onClick={(e) => {
            handleActiveLink(e.target);
          }}
          href={"#page2"}>
          AIM
        </a>
        <a
          onClick={(e) => {
            handleActiveLink(e.target);
          }}
          href={"#page3"}>
          PROJECTS
        </a>
        <a
          onClick={(e) => {
            handleActiveLink(e.target);
          }}
          href={"#page4"}>
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Header;
