import gsap from "gsap";

export const scrollAnimation = (position, target, isMobile, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: !isMobile ? -0.2537680907 : -0.4508955659,
    y: !isMobile ? -0.1898468851 : -0.033600104,
    z: !isMobile ? -2.6940573787 : -4.909763079,
    scrollTrigger: {
      trigger: "#page2",
      start: `top ${window.innerWidth <= 600 ? "80%" : "bottom"}`,
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: !isMobile ? -0.2048450144 : -0.3377077553,
      y: !isMobile ? -0.1564711684 : -0.238810041,
      z: !isMobile ? -0.0182061929 : -0.0156105066,
      scrollTrigger: {
        trigger: "#page2",
        start: `top ${window.innerWidth <= 600 ? "80%" : "bottom"}`,
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to("#page1-in", {
      y: -2000,
      opacity: 0,
      scrollTrigger: {
        trigger: "#page2",
        start: `top ${window.innerWidth <= 600 ? "80%" : "bottom"}`,
        end: "top top",
        scrub: 2,
      },
    })
    .to(".swiper", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        start: "top top",
        end: "top -20%",
        scrub: 2,
      },
    })
    .to(position, {
      x: !isMobile ? -0.4012417938 : -0.2077779851,
      y: !isMobile ? 0.6641794251 : 0.0581925263,
      z: !isMobile ? -0.2606794359 : 1.3193816829,
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
      x: !isMobile ? -0.2676916877 : -0.2152992674,
      y: !isMobile ? -0.189403595 : -0.2396495543,
      z: !isMobile ? -0.2591050956 : 0.4952790869,
      scrollTrigger: {
        trigger: "#page3",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .from(".sample-container", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#page3",
        start: "top top",
        end: "top top",
        scrub: 2,
      },
    })
    .to(".samples", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page3",
        start: "top top",
        end: "top -100%",
        scrub: 2,
        immediateRender: false,
        pin: true,
      },
    })

    .to(position, {
      x: !isMobile ? -2.4523251997 : -3.8528509628,
      y: !isMobile ? -0.2191977853 : -0.1090825537,
      z: !isMobile ? 0.0127888722 : 0.0612255442,
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
      x: !isMobile ? -0.2492344958 : -0.2361707519,
      y: !isMobile ? -0.176438581 : -0.1512216172,
      z: !isMobile ? -0.0128171744 : -0.0211799277,
      scrollTrigger: {
        trigger: "#page4",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to("#page3>div", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#page4",
        start: "top bottom",
        end: "top bottom",
        scrub: 2,
      },
    })
    .from(".child", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#page4",
        start: "top top",
        end: "top top",
        scrub: 2,
      },
    })
    .to(".contact-links", {
      opacity: 1,
      y: -100,
      scrollTrigger: {
        trigger: "#page4",
        start: "top top",
        end: "top top",
        scrub: 2,
      },
    })
    .from(".child h1", {
      transform: "translateY(60%)",
      scrollTrigger: {
        trigger: "#page4",
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: 5,
      },
    });
};
