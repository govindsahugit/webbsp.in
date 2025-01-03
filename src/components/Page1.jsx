import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { use } from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

const Page1 = ({ setScroll, highlight, setHighlight }) => {
  const textRef = useRef(null);
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { x, y, width, height } = textRef.current.getBoundingClientRect();
    const newXVal = (clientX - x - width / 2) / 22;
    const newYVal = (clientY - y - height / 2) / 10;

    if (window.innerWidth > 900) {
      gsap.to(textRef.current, {
        duration: window.innerWidth < 1000 ? 1.1 : 6,
        transform: `rotateX(${-newYVal}deg) rotateY(${newXVal}deg)`,
        ease: "power2.out",
      });
    }
  };

  window.addEventListener("touchstart", (e) => {
    if (window.innerWidth < 600) {
      setHighlight(true);
      gsap.to(".swiper", {
        scale: 1.2,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });

  window.addEventListener("touchend", (e) => {
    if (window.innerWidth < 600) {
      setHighlight(false);
      gsap.to(".swiper", {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });

  useGSAP(() => {
    gsap.to(".swiper div", {
      y: window.innerWidth <= 600 ? 12 : 35,
      duration: window.innerWidth <= 600 ? 0.6 : 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      onMouseMove={
        window.scrollY === 0
          ? window.innerWidth > 900
            ? handleMouseMove
            : () => {}
          : () => {}
      }
      id="page1">
      <div id="page1-in">
        {window.innerWidth > 900 ? (
          <h1 ref={textRef} id="tilt-text">
            WEBBSP.IN
          </h1>
        ) : (
          <span></span>
        )}
      </div>
      <a onClick={() => setScroll(true)} href="#page2" className="swiper">
        <div></div>
      </a>
    </div>
  );
};

export default Page1;
