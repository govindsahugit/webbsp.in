import gsap from "gsap";

export const scrollAnimation = (position, target, isMobile, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: !isMobile ? -0.2537680907 : -7.0,
    y: !isMobile ? -0.1898468851 : -12.2,
    z: !isMobile ? -2.6940573787 : -6.0,
    scrollTrigger: {
      trigger: "#page2",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: !isMobile ? -0.2048450144 : 0.7,
      y: !isMobile ? -0.1564711684 : 1.9,
      z: !isMobile ? -0.0182061929 : 0.7,
      scrollTrigger: {
        trigger: "#page2",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to("#page1>div", {
      opacity: 0,
      y: -1500,
      scrollTrigger: {
        trigger: "#page2",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .from(".nav-links div", {
      opacity: 0,
      y: -40,
      delay: 2.5,
      duration: 0.5,
      stagger: 0.1,
    })
    .from(".logo-and-name", {
      opacity: 0,
      y: -50,
      duration: 0.5,
    })
    .from(".Logo", {
      opacity: 0,
      duration: 0.8,
    })
    .to(position, {
      x: !isMobile ? -0.4012417938 : 9.36,
      y: !isMobile ? 0.6641794251 : 10.95,
      z: !isMobile ? -0.2606794359 : 0.09,
      scrollTrigger: {
        trigger: "#page3",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: !isMobile ? -0.2676916877 : -1.62,
      y: !isMobile ? -0.189403595 : 0.02,
      z: !isMobile ? -0.2591050956 : -0.06,
      scrollTrigger: {
        trigger: "#page3",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(position, {
      x: !isMobile ? -2.4523251997 : 9.36,
      y: !isMobile ? -0.2191977853 : 10.95,
      z: !isMobile ? 0.0127888722 : 0.09,
      scrollTrigger: {
        trigger: "#page4",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: !isMobile ? -0.2492344958 : -1.62,
      y: !isMobile ? -0.176438581 : 0.02,
      z: !isMobile ? -0.0128171744 : -0.06,
      scrollTrigger: {
        trigger: "#page4",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
};
