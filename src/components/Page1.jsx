import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { use } from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

const Page1 = () => {
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { x, y, width, height } = textRef.current.getBoundingClientRect();
    const newXVal = (clientX - x - width / 2) / 22;
    const newYVal = (clientY - y - height / 2) / 10;

    gsap.to(textRef.current, {
      duration: window.innerWidth < 1000 ? 1.1 : 6,
      transform: `rotateX(${-newYVal}deg) rotateY(${newXVal}deg)`,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    gsap.to(".swiper div", {
      y: window.innerWidth <= 600 ? 15 : 35,
      duration: window.innerWidth <= 600 ? 1 : 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      onMouseMove={window.scrollY === 0 ? handleMouseMove : () => {}}
      id="page1">
      <div id="page1-in">
        <h1 ref={textRef} id="tilt-text">
          WEBBSP.IN
        </h1>
      </div>
      <a href="#page2" className="swiper">
        <div></div>
      </a>
    </div>
  );
};

export default Page1;
