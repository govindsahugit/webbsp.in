import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Tilt } from "react-tilt";

const Header = () => {
  const handleActiveLink = (ele) => {
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    ele.className = "active";
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
        <Tilt
          options={{
            max: 45,
            scale: 1.08,
            speed: 450,
          }}>
          <a
            className="active"
            onClick={(e) => {
              handleActiveLink(e.target);
            }}
            href={"#page1"}>
            HOME
          </a>
        </Tilt>
        <Tilt
          options={{
            max: 45,
            scale: 1.08,
            speed: 450,
          }}>
          <a
            onClick={(e) => {
              handleActiveLink(e.target);
            }}
            href={"#page2"}>
            AIM
          </a>
        </Tilt>
        <Tilt
          options={{
            max: 45,
            scale: 1.08,
            speed: 450,
          }}>
          <a
            onClick={(e) => {
              handleActiveLink(e.target);
            }}
            href={"#page3"}>
            PROJECTS
          </a>
        </Tilt>
        <Tilt
          options={{
            max: 45,
            scale: 1.08,
            speed: 450,
          }}>
          <a
            onClick={(e) => {
              handleActiveLink(e.target);
            }}
            href={"#page4"}>
            CONTACT
          </a>
        </Tilt>
      </div>
    </nav>
  );
};

export default Header;
