const scrollMouse = document.querySelector('.scroll-mouse');

document.addEventListener('mousemove', (e) => {
  // Offset so the icon doesn't cover the cursor
  const offsetX = 20;
  const offsetY = 20;

  scrollMouse.style.transform = `translate(${e.clientX + offsetX}px, ${e.clientY + offsetY}px)`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ---------------- SMOOTHER ----------------
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2.5,
  smoothTouch: 0.1,
  effects: true,
});

// ---------------- LOADING & CAPSULE ----------------
const tl = gsap.timeline();

tl.to(".loading", {
  width: "100%",
  duration: 2,
  delay: 0.5,
  ease: "power2.inOut",
})
.to(".capsuleLogo", {
  scale: 2,
  duration: 0.5,
  opacity: 0,
}, 'a')
.to(".capsul", {
  clipPath: "inset(0% 0% 0% 0%)",
}, 'a');

// ---------------- PAGE1 VIDEO ----------------
gsap.to("#bgVideo", {
  transform: "scale(1.2)",
  scrollTrigger: {
    trigger: ".page1",
    start: "90% 80%",
    end: "155% 80%",
    scrub: true,
  }
});

// ---------------- PAGE2 ----------------
gsap.to(".page2 .bottom", {
  y: 760,
  scrollTrigger: {
    trigger: ".page2",
    start: "28% 70%",
    end: "100% 70%",
    scrub: 1,
  }
});

// ---------------- PAGE3 HIDE ----------------
gsap.to(".hide", {
  top: "-100%",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".page3",
    start: "25% 50%",
    end: "60% 50%",
    scrub: 1,
  }
});

// ---------------- PAGE3 IMAGES ----------------
const images = [
  { selector: ".page3 .top .left .imgBox:nth-child(1)", x: -300, y: 0 },
  { selector: ".page3 .top .left .imgBox:nth-child(2)", x: 0, y: 300 },
  { selector: ".page3 .top .left .imgBox:nth-child(3)", x: 300, y: 0 },
];

images.forEach(({ selector, x, y }) => {
  // entrance
  gsap.from(selector, {
    x,
    y,
    opacity: 0,
    duration: 3,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".page3 .top",
      start: "top 90%",
      end: "top 50%",
      scrub: true,
    },
  });

  // exit / fade out
  gsap.to(selector, {
    scale: 1.5,
    opacity: 0,
    ease: "power1.out",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".page3 .top",
      start: "top -10%",
      end: "top -50%",
      scrub: true,
    },
  });
});

// ---------------- PAGE3PART2 IMAGES ----------------
const images2 = [
  { selector: ".page3Part2 .top .left .imgBox2:nth-child(1)", x: -300, y: 0 },
  { selector: ".page3Part2 .top .left .imgBox2:nth-child(2)", x: 0, y: 300 },
  { selector: ".page3Part2 .top .left .imgBox2:nth-child(3)", x: 300, y: 0 },
];

images2.forEach(({ selector, x, y }) => {
  gsap.from(selector, {
    x,
    y,
    opacity: 0,
    duration: 3,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".page3Part2 .top",
      start: "top 90%",
      end: "top 50%",
      scrub: true,
    },
  });

  gsap.to(selector, {
    scale: 1.5,
    opacity: 0,
    ease: "power1.out",
    immediateRender: false,
    scrollTrigger: {
      trigger: ".page3Part2 .top",
      start: "top -10%",
      end: "top -50%",
      scrub: true,
    },
  });
});

// ---------------- PAGE1PART2 BACKGROUND ----------------
gsap.from(".page1Part2 .background", {
  scale: 0.8,
  y: 50,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page1Part2",
    start: "top 40%",
    end: "top -20%",
    scrub: true,
  }
});

gsap.to(".page1Part2 .background", {
  scale: 1.2,
  x: -600,
  opacity: 0,
  ease: "power1.out",
  immediateRender: false,
  scrollTrigger: {
    trigger: ".page1Part2",
    start: "top -10%",
    end: "top -50%",
    scrub: true,
  }
});

// ---------------- PAGE4 ----------------
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4",
    start: "30% 30%",
    end: "600% 30%",
    scrub: 1,
    pin: true,
  }
  
});

// Slide 1
tl4.to(".box h3", { opacity: 0 }, 'a')
   .to(".page4 .background", { width: "calc(100vw - 1rem)", height: "calc(100vh - 1rem)", borderRadius: "3.5rem", y: -60 }, 'a')
   .to(".page4 .background img", { transform: "scale(1)" }, 'a')
   .from(".background .topText h4, .background .topText h3, .background .bottomText h3", { opacity: 0, x: 50 });

tl4.to({}, { duration: 0.6 }, "+=0");

// Slide 2
tl4.to("#second", { transform: "translate(-50%, -56%)", duration: 3.5, ease: "power2.inOut" })
   .to("#second img", { transform: "scale(1)", duration: 1.5, ease: "power2.inOut" }, "-=1.2")
   .to(".page4 .background", { scale: 0.9, opacity: 0, y: -50, duration: 1.2, ease: "power2.inOut", immediateRender: false }, "-=1.0")
   .from("#second .topText h4, #second .topText h3, #second .bottomText h3", { opacity: 0, x: 50, duration: 1.2, stagger: 0.2 }, "-=0.8");

// Slide 3
tl4.to("#third", { transform: "translate(-50%, -56%)", duration: 3.5, ease: "power2.inOut" })
   .to("#third img", { transform: "scale(1)", duration: 1.5, ease: "power2.inOut" }, "-=1.2")
   .to("#second", { scale: 0.9, opacity: 0, duration: 1.2, ease: "power2.inOut", immediateRender: false }, "-=1.0")
   .from("#third .topText h4, #third .topText h3, #third .bottomText h3", { opacity: 0, x: 50, duration: 1.2, stagger: 0.2 }, "-=0.8");

// Slide 4
tl4.to("#fourth", { transform: "translate(-50%, -56%)", duration: 3.5, ease: "power2.inOut" })
   .to("#fourth img", { transform: "scale(1)", duration: 1.5, ease: "power2.inOut" }, "-=1.2")
   .to("#third", { scale: 0.9, opacity: 0, duration: 1.2, ease: "power2.inOut", immediateRender: false }, "-=1.0")
   .from("#fourth .topText h4, #fourth .topText h3, #fourth .bottomText h3", { opacity: 0, x: 20, duration: 1.2, stagger: 0.2 }, "-=0.8");

