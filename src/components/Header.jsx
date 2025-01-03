import React from "react";

const Header = ({ handleMenuBar }) => {
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
      {window.innerWidth <= 600 ? (
        <div onClick={(e) => window.scrollTo({ top: 0 })} className="home-btn">
          <i className="ri-home-9-line"></i>
          <span>HOME</span>
        </div>
      ) : (
        <div className="nav-links">
          <a
            className="active"
            onClick={(e) => {
              handleActiveLink(e.target);
            }}
            data-replace="HOME"
            href={"#page1"}>
            <span>HOME</span>
          </a>
          <a
            onClick={(e) => {
              handleActiveLink(e.target);
            }}
            data-replace="AIM"
            href={"#page2"}>
            <span>AIM</span>
          </a>
          <a
            onClick={(e) => {
              handleActiveLink(e.target);
            }}
            data-replace="PROJECTS"
            href={"#page3"}>
            <span>PROJECTS</span>
          </a>
          <a
            onClick={(e) => {
              handleActiveLink(e.target);
            }}
            data-replace="CONTACT"
            href={"#page4"}>
            <span>CONTACT</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
