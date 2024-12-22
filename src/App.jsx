import { useRef, useState } from "react";
import WebgiViewer from "./components/WebgiViewer";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  const [isModel, setIsModel] = useState(false);
  const page1Ref = useRef();
  const page2Ref = useRef();
  const page3Ref = useRef();
  const page4Ref = useRef();

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
  return (
    <>
      <Router>
        <div className="App">
          {/* <div id="loader">
            <div className="gif">
              <img src="./network.gif" alt="" />
            </div>
          </div> */}
          <Header />
          <main>
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
