import { useRef, useState } from "react";
import WebgiViewer from "./components/WebgiViewer";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const [isModel, setIsModel] = useState(false);
  const page1Ref = useRef();
  const page2Ref = useRef();
  const page3Ref = useRef();
  const page4Ref = useRef();
  const menuRef = useRef();
  const closeRef = useRef();

  window.addEventListener("scroll", (e) => {
    const navLinks = document.querySelectorAll(".nav-links a");
    if (page2Ref.current.getBoundingClientRect().top <= 200) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      navLinks[1].className = "active";
    } else {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      navLinks[0].className = "active";
    }
    if (page3Ref.current.getBoundingClientRect().top <= 200) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      navLinks[2].className = "active";
    }
    if (page4Ref.current.getBoundingClientRect().top <= 200) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      navLinks[3].className = "active";
    }
  });

  const handleMenuBar = (e) => {
    gsap.to(menuRef.current, {
      transform: "translateX(0%)",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleCloseBtn = () => {
    gsap.to(menuRef.current, {
      transform: "translateX(100%)",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    const navLinks = document.querySelectorAll(".nav-links a");
    tl.to("#loader", {
      opacity: 0,
      duration: 1,
      delay: 4,
      display: "none",
      ease: "power2.out",
    });
    tl.from(navLinks, {
      opacity: 0,
      y: -30,
      stagger: 0.2,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out",
    });
    tl.from(".logo-and-name", {
      opacity: 0,
      y: -30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <div id="loader">
            <div id="ele">BE DIGITAL</div>
          </div>
          <div ref={menuRef} className="menu-links">
            <div onClick={handleCloseBtn} ref={closeRef} className="close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </div>
            <div className="links">
              <a
                onClick={(e) => {
                  handleCloseBtn();
                  handleActiveLink(e.target);
                }}
                href={"#page1"}>
                <span>HOME</span>
              </a>
              <a
                onClick={(e) => {
                  handleCloseBtn();
                  handleActiveLink(e.target);
                }}
                href={"#page2"}>
                <span>AIM</span>
              </a>
              <a
                onClick={(e) => {
                  handleCloseBtn();
                  handleActiveLink(e.target);
                }}
                href={"#page3"}>
                <span>PROJECTS</span>
              </a>
              <a
                onClick={(e) => {
                  handleCloseBtn();
                  handleActiveLink(e.target);
                }}
                href={"#page4"}>
                <span>CONTACT</span>
              </a>
            </div>
          </div>
          <Header handleMenuBar={handleMenuBar} />
          <main onClick={handleCloseBtn}>
            <WebgiViewer
              isModel={isModel}
              setIsModel={setIsModel}
              webgiGLB="scene (1).glb"
            />
            <div ref={page1Ref}>
              <Page1 />
            </div>
            <div ref={page2Ref}>
              <Page2 />
            </div>
            <div ref={page3Ref}>
              <Page3 />
            </div>
            <div ref={page4Ref}>
              <Page4 />
            </div>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
