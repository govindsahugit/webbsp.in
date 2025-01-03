import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Page2 = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".aim h1", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#page2",
        start: "top bottom",
        end: "top top",
        scrub: 2,
      },
    }).to(".aim", {
      transform: `translateX(-${window.innerWidth < 600 ? "100" : "100"}%)`,
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
        pin: true,
      },
    });
  }, []);

  return (
    <div id="page2">
      <div className="aim">
        <h1>WE BRING IDEAS TO LIFE</h1>
        <p className="text-intro">
          Enhance your business with a visually striking and high-performing
          website. We deliver custom designs that captivate and convert visitors
          into customers.
        </p>
      </div>
    </div>
  );
};

export default Page2;
