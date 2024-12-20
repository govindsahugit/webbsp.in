import gsap from "gsap";

export const scrollAnimation = (position, target, isMobile, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: !isMobile ? -0.2537680907 : -0.2537680907,
    y: !isMobile ? -0.1898468851 : -0.1898468851,
    z: !isMobile ? -2.6940573787 : -2.6940573787,
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
      x: !isMobile ? -0.2048450144 : -0.2048450144,
      y: !isMobile ? -0.1564711684 : -0.1564711684,
      z: !isMobile ? -0.0182061929 : -0.0182061929,
      scrollTrigger: {
        trigger: "#page2",
        start: "top bottom",
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
        start: "top bottom",
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
    .from(".nav-links div", {
      opacity: 0,
      y: -40,
      delay: 1,
      duration: 0.5,
      stagger: 0.1,
    })
    .from(".aim h1", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#page2",
        start: "top bottom",
        end: "top top",
        scrub: 2,
      },
    })
    .to(".aim", {
      transform: "translateX(-190%)",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
        pin: true,
      },
    })
    .to(position, {
      x: !isMobile ? -0.4012417938 : -0.4012417938,
      y: !isMobile ? 0.6641794251 : 0.6641794251,
      z: !isMobile ? -0.2606794359 : -0.2606794359,
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
      x: !isMobile ? -0.2676916877 : -0.2676916877,
      y: !isMobile ? -0.189403595 : -0.189403595,
      z: !isMobile ? -0.2591050956 : -0.2591050956,
      scrollTrigger: {
        trigger: "#page3",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(position, {
      x: !isMobile ? -2.4523251997 : -2.4523251997,
      y: !isMobile ? -0.2191977853 : -0.2191977853,
      z: !isMobile ? 0.0127888722 : 0.0127888722,
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
      x: !isMobile ? -0.2492344958 : -0.2492344958,
      y: !isMobile ? -0.176438581 : -0.176438581,
      z: !isMobile ? -0.0128171744 : -0.0128171744,
      scrollTrigger: {
        trigger: "#page4",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .from(".whatsapp-link", {
      x: -50,
      delay: 1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#page4",
        start: "top top",
        end: "top top",
        scrub: 4,
      },
    })
    .from(".email-link", {
      x: 50,
      duration: 1,
      delay: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#page4",
        start: "top top",
        end: "top top",
        scrub: 4,
      },
    })
    .from(".ig-link", {
      y: -50,
      delay: 0.6,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#page4",
        start: "top top",
        end: "top top",
        scrub: 4,
      },
    });
};
