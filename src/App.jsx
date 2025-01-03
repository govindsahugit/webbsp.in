import { useEffect, useRef, useState } from "react";
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
  const [scroll, setScroll] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [backPage, setBackPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [nextPageLink, setNextPageLink] = useState("");
  const page1Ref = useRef();
  const page2Ref = useRef();
  const page3Ref = useRef();
  const page4Ref = useRef();
  const navigateRef = useRef();

  useEffect(() => {
    if (window.innerWidth <= 600) {
      if (!scroll) document.body.style.overflowY = "hidden";
      else document.body.style.overflowY = "unset";
    }
  }, [scroll]);

  const handleNavigator = (e) => {
    navigateRef.current.style.opacity = 1;
    navigateRef.current.style.zIndex = "3";
  };

  const handleNavigatorBack = (e) => {
    navigateRef.current.style.zIndex = "unset";
    navigateRef.current.style.opacity = 0;
  };

  const handleObserver = (targetEle, callBack) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callBack();
          }
        });
      },
      {
        root: null, // Use the viewport as the container
        threshold: 0, // Trigger when even one pixel is visible
      }
    );
    // Select the target page
    const target = document.querySelector(targetEle);
    // Start observing the target
    observer.observe(target);
  };

  let lastScrollTop = 0;
  window.addEventListener("scroll", (e) => {
    if (window.innerWidth > 600) {
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
    } else {
      const scrollTop = window.scrollY || window.pageYOffset;
      const rect2 = page2Ref.current.getBoundingClientRect();
      const rect3 = page3Ref.current.getBoundingClientRect();
      const rect4 = page4Ref.current.getBoundingClientRect();
      const rect1 = page1Ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight + 200;

      // Check if the bottom of page2 is within the viewport
      if (rect2.bottom <= windowHeight && rect2.bottom > windowHeight - 100) {
        setScroll(false);
        setNextPage("PROJECTS");
        setBackPage("");
        setNextPageLink("page3");
        handleNavigator();
      }

      if (
        rect2.bottom >= windowHeight + 20 &&
        rect2.bottom < windowHeight + 150
      ) {
        setScroll(true);
        handleNavigatorBack();
      }

      if (
        rect2.bottom <= windowHeight - 150 &&
        rect2.bottom > windowHeight - 200
      ) {
        setScroll(true);
        handleNavigatorBack();
      }

      if (scrollTop < lastScrollTop) {
        if (
          rect2.bottom <= windowHeight - 300 &&
          rect2.bottom > windowHeight - 1100
        ) {
          setScroll(false);
          handleNavigator();
          setBackPage("page2");
          setNextPageLink("page3");
          setNextPage("PROJECTS");
        }
        if (
          rect1.bottom <= windowHeight - 300 &&
          rect1.bottom > windowHeight - 1100
        ) {
          setScroll(false);
          handleNavigator();
          setBackPage("page1");
          setNextPageLink("page2");
          setNextPage("DON'T BACK");
        }
      }

      if (rect3.bottom <= windowHeight && rect3.bottom > windowHeight - 100) {
        setScroll(false);
        setNextPage("CONTACT US");
        setBackPage("");
        setNextPageLink("page4");
        handleNavigator();
      }

      if (
        rect3.bottom >= windowHeight + 50 &&
        rect3.bottom < windowHeight + 100
      ) {
        setScroll(true);
        handleNavigatorBack();
      }

      if (rect4.bottom <= windowHeight) {
        const a = document.querySelectorAll(".navigator a");
        a[1].style.opacity = 0;
        setBackPage("page3");
        setNextPageLink("page4");
      } else {
        const a = document.querySelectorAll(".navigator a");
        a[1].style.opacity = 1;
      }

      if (
        rect4.bottom >= windowHeight + 50 &&
        rect4.bottom < windowHeight + 100
      ) {
        setScroll(true);
        handleNavigatorBack();
      }

      if (window.scrollY === 0) {
        setScroll(false);
        handleNavigatorBack();
      }

      handleObserver(".child h1", () => {
        setScroll(false);
        handleNavigator();
      });

      lastScrollTop = scrollTop;
    }
  });

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
          {window.innerWidth <= 900 ? (
            <div ref={navigateRef} className="navigator">
              <a
                onClick={() => {
                  setTimeout(
                    () => {
                      window.scrollTo({
                        top: window.scrollY - 600,
                        behavior: "smooth",
                      });
                      handleNavigatorBack();
                    },
                    backPage === "back" ? 1 : 1500
                  );
                }}
                href={`#back${backPage}`}>
                <span>BACK</span>
                <i className="ri-arrow-up-line"></i>
              </a>
              <a
                onClick={() => {
                  setScroll(true);
                  handleNavigatorBack();
                }}
                href={`#${nextPageLink}`}>
                <span>{nextPage}</span>
                <i className="ri-arrow-down-line"></i>
              </a>
            </div>
          ) : (
            <span></span>
          )}
          {/* <div id="loader">
              <div id="ele">BE DIGITAL</div>
            </div> */}
          <Header />
          <main id="main">
            <WebgiViewer
              isModel={isModel}
              setIsModel={setIsModel}
              webgiGLB="scene (1).glb"
            />
            <div ref={page1Ref}>
              <Page1
                highlight={highlight}
                setHighlight={setHighlight}
                setScroll={setScroll}
              />
            </div>
            <div ref={page2Ref}>
              <Page2 setScroll={setScroll} />
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
